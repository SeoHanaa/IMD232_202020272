class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //받아올 값들
    this.pos = createVector(x, y); //위치(포지션) 벡터화하기
    this.vel = p5.Vector.random2D(); //속력 초기속도 길이1, 방향 무작위인
    this.acc = createVector(); //가속도
    this.mass = mass; //질량
    this.rad = rad; //반지름
    this.speedMx = speedMx; //값을 받아오는 최대속도
    this.forceMx = forceMx; //적용하는 힘의 최대치
    this.neighborhooodRad = 50; //
    this.color = color; //색
  }

  cohesion(others) {
    //다른 개체 불러오기
    let cnt = 0; //cnt변수선언
    const steer = createVector(0, 0); //steer벡터 생성
    others.forEach((each) => {
      if (each !== this) {
        //each가 똑같지 않을 때
        const distSq = //거리의 제곱 선언
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //거리 제곱이 주변지름제곱보다 작을 경우 실행
          steer.add(each.pos); //steer에 다른 개체 pos더해줌
          cnt++; //실행될 경우 cnt=cnt+1
        }
      }
    });
    if (cnt > 0) {
      //cnt가 0보다 클 경우
      steer.div(cnt); //steer에서cnt를 빼줌
      steer.sub(this.pos); //steer에서 pos를 빼줌
      steer.setMag(this.speedMx); //steer에서
      steer.sub(this.vel); //속도값을 빼줌
      steer.limit(this.forceMx); //더 긴 경우 짧아지게함
    }
    return steer; //값 반환
  }

  align(others) {
    //다른 개체 불러옴
    let cnt = 0; //cnt변수 선언
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        //each가 자신이 아닐 때
        const distSq = //거리제곱 선언
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //distSq가 원제곱보다 작을 경우
          steer.add(each.vel); //합에 속도를 더해줌
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      //cnt가 0보다 클 경우
      steer.div(cnt); //steer에서cnt를 빼줌
      steer.setMag(this.speedMx); //최대치(speedMx)이상 커지지못하게 함
      steer.sub(this.vel); //속도값을 빼줌
      steer.limit(this.forceMx); //더 긴 경우 짧아지게함
    }
    return steer; //steer값 반환
  }

  separate(others) {
    //다른 개체들을 끌어와 계산해야함
    let cnt = 0; //변수선언
    const steer = createVector(0, 0); //변수선언 평균값을 담을 통이 필요
    others.forEach((each) => {
      if (each !== this) {
        //each가 this(개체 자신)아닐때만 실행
        const dist = this.pos.dist(each.pos); //내 위치에서 다른 개체의 벡터 거리를 뽑아냄
        if (dist > 0 && this.rad + each.rad > dist) {
          //자신 개체와 다른 개체의 반지름을 더한 거리가 작거나 같은 경우(부딫힌 경우)
          const distNormal = dist / (this.rad + each.rad); //자신 개체 다른 객체 더한 것을 dist로 나눈 가장 멀었을 떄 1 완전히 겹쳤을 떄 0이라는 값을 담아줌
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //towardMeVec = 내 위치-다른 개체 위치
          towardMeVec.setMag(1 / distNormal); //나눠주는 값이 클수록 전체 값이 작아지는 반비례 벡터를 나눠줌
          steer.add(towardMeVec);
          cnt++; //이 상황 될때마다 cnt= cnt+1해줌
        }
      }
    });
    if (cnt > 0) {
      //위의 카운트를 1번 이상한 경우
      steer.div(cnt); //sum을 cnt로 나눔
      steer.setMag(this.speedMx); //최대치(speedMx)이상 커지지못하게 함
      steer.sub(this.vel); //속도값을 빼줌
      steer.limit(this.forceMx); //더 긴 경우 짧아지게함
    }
    return steer; //steer값 반환
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass); //force를 mass로 나누는 변수(상수)생성
    this.acc.add(forceDivedByMass); //나눈 값을 acc에 넣어라
  }

  update() {
    this.vel.add(this.acc); //속도에 가속도 더하기
    this.vel.limit(this.speedMx); //최대치(speedMx)이상 커지지못하게 함
    this.pos.add(this.vel); //위치에 속도 더하기
    this.acc.mult(0); //가속도 매번 초기화
  }

  borderInfinite() {
    //값이 화면 밖으로 넘어가면 다시 생기게 함
    if (this.pos.x < -infiniteOffset) {
      //x가 offset보다 작으면
      this.pos.x = width + infiniteOffset; //width + infiniteOffset로 x위치를 바꿈
    } else if (this.pos.x > width + infiniteOffset) {
      //x가 offset보다 크다면
      this.pos.x = -infiniteOffset; //-infiniteOffset로 x위치를 바꿈
    }
    if (this.pos.y < -infiniteOffset) {
      //y가 offset보다 작으면
      this.pos.y = height + infiniteOffset; //height + infiniteOffset로 y위치를 바꿈
    } else if (this.pos.y > height + infiniteOffset) {
      //y가 offset보다 크다면
      this.pos.y = -infiniteOffset; //-infiniteOffset로 y위치를 바꿈
    }
  }

  display() {
    push(); //translate사용을 위해 변환 상태 저장
    translate(this.pos.x, this.pos.y); //그래픽 위치를 x와 y값로 조정
    rotate(this.vel.heading()); //속도의 방향으로 뻗어감
    noStroke(); //외곽선 제거
    fill(this.color); //입력받은 컬러로 색 채우기
    beginShape(); //벡터 그리기 시작
    vertex(this.rad, 0); //점 찍기
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //radians활용해 점찍기
    vertex(0, 0); //점 찍기
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //radians활용해 점찍기
    endShape(CLOSE); //벡터 그리기 끝
    // noFill(); //채우지않기
    // stroke(0, 0, 60); 외곽선 그리기
    // ellipse(0, 0, 2 * this.rad); 부딫히면 떨어지는 범위 그리기
    // stroke(0, 0, 80); 선 그리기
    // ellipse(0, 0, 2 * this.neighborhooodRad); //시각화
    pop(); //translate사용을 위해 변환 상태 복원
  }
}
