class App {
  constructor() {
    this.numberPassanger = document.getElementById("passenger-num");
    this.carContainerElement = document.getElementById("card-search");
    this.filterCars = document.getElementById("load-btn");
    this.driverType = document.getElementById("driver-type");
    this.pickUpTime = document.getElementById("pick-up-time");
    this.PickUpDate = document.getElementById("start-date");
  }

  async init() {
    await this.load();
    this.filterCars.onclick = this.searchFilter;
  }

  // Check if the cars was ready 
  // if the car was ready then it will return true
  carsAvailabilityTime = (car) =>{
    const date = new Date(car.availableAt).getTime();
    const pickUp = new Date(`${this.PickUpDate.value} ${this.pickUpTime.value}`).getTime();
    // check if the date match with the pickup request
    if (date >= pickUp){
      return true; 
    }
    return false;
  }

  // function to render cards
  renderCardCars = (i) =>{
    let node = document.createElement("div");
    node.innerHTML = Car.list[i].render()
    this.carContainerElement.appendChild(node);
  }

  // will do the filtering request
  searchFilter = () => {
    // clear the previous data
    this.clear()
    // make new object
    let carsData = Car.list;
    // do looping to check if the car match the filter request
    for(let i = 0; i < carsData.length; i++){
      // if car ready and the driver type also match the client request then it will be render
        if(this.carsAvailabilityTime(carsData[i]) == true && carsData[i].available == true && this.driverType.value == "true" ){
         this.renderCardCars(i)
        }else if(this.carsAvailabilityTime(carsData[i]) == true && carsData[i].available == true && this.driverType.value == "true" ){
          this.renderCardCars(i)
        }
        else{
        console.log(carsData[i].model)
      }
    }
  }
  
  // -----------------------------
  filterPassenger = () => {
    // clear cards and replace it
    this.clear();
    // Filter cars base on the number of passenger
    let passenger = this.numberPassanger.value;
    // get the car list form Car class
    let car = Car.list
    for (let i = 0; i < car.length; i++ ){
      if(car[i]["capacity"] == passenger){
        let node = document.createElement("div");
        node.innerHTML = Car.list[i].render()
        this.carContainerElement.appendChild(node);
      }
    }
    let tgl = new Date(Car.list[0].availableAt).getTime();
    console.log(tgl)  
  };


  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
