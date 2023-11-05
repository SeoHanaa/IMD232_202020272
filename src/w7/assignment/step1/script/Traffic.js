class Traffic {
  constructor() {
    this.vehicles = []; //어레이 만들기
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      //각각의 vehicles에게 줄 속성 만들기
      const separate = eachVehicle.separate(this.vehicles); //separate 값을 할당해줌
      separate.mult(1);
      eachVehicle.applyForce(separate); //부딫히면 서로 밀어내게하기 위해
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5); //너무 일정하지 않게 align 0.5로 지정
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5); //서로 피하려는 힘 0.5로 지정
      eachVehicle.applyForce(cohesion);
      eachVehicle.update(); //eachVehicle 업데이트
      eachVehicle.borderInfinite(); //eachVehicle이 화면 밖으로 나가면 다시 보이게 함
      eachVehicle.display(); //eachVehicle 보여주기
    });
  }

  addVehicle(x, y) {
    // const mass = floor(random(1, 3));//floor처리해 내림차해서 정수로 만들어줌
    const mass = 1; //질량 값 넣어주기
    this.vehicles.push(
      //새로 어레이에 추가
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40)) //새로운 Vehicles과 그 값 넣어주기
    );
  }
}
