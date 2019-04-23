var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach((task) => {
        console.log(this.name + " wants to " + task);
      });
    }
  };

  function test1() {
      this.name = 'Sam';

      this.getName = function() {
          console.log(this.name);
      }
  }

  const person = {
      name: 'Alex',
      cars: ['Mazda', 'Ferrari'],
      getAllCarsNew: () => {
        // // Inside arrow function refers to the this in current braces
        // If we uncomment the below, this function works totally fine
        // this.name = "SSB";
        // this.cars = [];
        console.log(this);  // gets window object since its a lambda function
        console.log(`${this.name} has ${this.cars.length} cars`);
      },
      getAllCars: function() {
        //// WAY 1
        // this.cars.forEach(function(car) {
        //     console.log(`${this.name}`);
        //     console.log(`${this.name} has ${car}`);
        // }.bind(this));


        //// WAY 2
        // let self = this;
        // this.cars.forEach(function(car) {
        //     console.log(`${self.name} has ${car}`);
        // });
        
        this.cars.forEach(car => {
            console.log(this);  // points to person object since its a normal function
            //// this refers to the current this object from which the lambda is called
            console.log(`${this.name} has ${car}`);
        });
      }
  }

  person.getAllCars();
  person.getAllCarsNew();
  
  var t1 = new test1();
  t1.getName();
  bunny.showTasks();
