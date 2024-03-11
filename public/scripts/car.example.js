class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="col">
    <div class="card h-100">
      <img src="${this.image}" style="-o-object-fit: cover;object-fit: cover;" width=270px height=160px   class="card-img-top mt-4">
      <div class="card-body">
        <h5 class="card-title">${this.manufacture} ${this.model}</h5>
        <h4>Rp 430.000 / hari</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, commodi ut dignissimos excepturi maiores porro ea iure quibusdam iste autem? Rem ab dicta obcaecati eos, reiciendis delectus explicabo corporis eveniet?</p>
        <p><img class="me-2" src="./icon/fi_users.png" alt=""> ${this.capacity}</p>
        <p><img class="me-2" src="./icon/fi_settings.png" alt="">${this.transmission}</p>
        <p><img class="me-2" src="./icon/fi_calendar.png" alt="">${this.year}</p>
      </div>
    </div>
  </div>`
  }
}
