// Complete the js code
class Car{
	constructor(make,model){
		this.model=model;
		this.make=make;
	}
	getMakeModel(){
		return `${this.make} ${this.model}`;
	}
}

class SportsCar {
	constructor(make,model,topSpeed) {
		super(make,model);
		this.topSpeed=topSpeed;
	}
	getTopSpeed(){
		return this.topSpeed;
	}
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;






