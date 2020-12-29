import {Coffee} from '../simplebarista/Coffee';
import {Tea} from '../simplebarista/Tea';
import {CoffeeWithHook} from './CoffeeWithHook';
import {TeaWithHook} from './TeaWithHook';

// const tea = new Tea();
// const coffee = new Coffee();

// console.log('\nMaking tea...');
// tea.prepareRecipe();

// console.log('\nMaking coffee...');
// coffee.prepareRecipe();

const teaHook = new TeaWithHook();
const coffeeHook = new CoffeeWithHook();

console.log('Making tea...');
teaHook.prepareRecipe('N');

console.log('Making coffee...');
coffeeHook.prepareRecipe('Y');
