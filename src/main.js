
//Parent Class
class Pizza {
  constructor(name, crust, cheese, sauce) {
    // thisObject.name = name;
    this.name = name;
    this.crust = crust;
    this.cheese = cheese;
    this.sauce = sauce;
  }
}

//Sub class
class FlavorPizza extends Pizza {
  constructor(name, crust, cheese, sauce, topping) {
    super(name, crust, cheese, sauce);
    this.topping = topping;
  }
}

const pepperoniPizza = new FlavorPizza('Pepperoni Pizza', 'Thin', 'Extra Mozzarella', 'Mariana', 'Pepperoni');

const template = '
  <div>
    <h1>${pepperoniPizza.name}</h1>
    <h2>Type:</h2>
    <ul>
      <li>${pepperoniPizza.crust}</li>
      <li>${pepperoniPizza.cheese}</li>
      <li>${pepperoniPizza.sauce}</li>
      <li>${pepperoniPizza.topping}</li>
    </ul>
  </div>
';

//#########################################################
//Parent Class
class Desserts {
  constructor(type, calories) {
    // thisObject.name = name;
    this.type = type;
    this.calories = calories;
  }
}

//Sub class
class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
    function includeSpoon() => console.log('Here is your spoon');
  }
}

const vanillaIceCream = new IceCream('IceCream', '340', 'Vanilla', '3');

console.log(vanillaIceCream);
includeSpoon(vanillaIceCream);
