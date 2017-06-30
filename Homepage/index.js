var Human = function(name, age, hunger) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
      };

      Human.prototype = {
        eat: function() {
          this.hunger = 0;
        },
        sleepForAYear: function () {
          this.age += 1;
        }
      };

      var someRandomHumanLikeObject = {
        age: 5,
      };

      console.log(someRandomHumanLikeObject.hunger);

      Human.prototype.eat.call(someRandomHumanLikeObject);

      console.log(someRandomHumanLikeObject.hunger);

      var today = new Date();
      console.log(today.toDateString());
      console.log(today.toDateString());
