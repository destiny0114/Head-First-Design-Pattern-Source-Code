import {Coffee} from './Coffee';
import {Tea} from './Tea';

const tea = new Tea();
const coffee = new Coffee();
console.log('Making tea...');
tea.prepareRecipe();
console.log('Making coffee...');
coffee.prepareRecipe();
