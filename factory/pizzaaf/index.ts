import {ChicagoPizzaStore} from './ChicagoPizzaStore';
import {NYPizzaStore} from './NYPizzaStore';

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza('cheese');
console.log('Ethan ordered a ' + pizza + '\n');

pizza = chicagoStore.orderPizza('cheese');
console.log('Joel ordered a ' + pizza + '\n');

pizza = nyStore.orderPizza('clam');
console.log('Ethan ordered a ' + pizza + '\n');

pizza = chicagoStore.orderPizza('clam');
console.log('Joel ordered a ' + pizza + '\n');

pizza = nyStore.orderPizza('pepperoni');
console.log('Ethan ordered a ' + pizza + '\n');

pizza = chicagoStore.orderPizza('pepperoni');
console.log('Joel ordered a ' + pizza + '\n');

pizza = nyStore.orderPizza('veggie');
console.log('Ethan ordered a ' + pizza + '\n');

pizza = chicagoStore.orderPizza('veggie');
console.log('Joel ordered a ' + pizza + '\n');
