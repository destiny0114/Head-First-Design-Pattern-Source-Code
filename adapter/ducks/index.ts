import {MallardDuck} from './MallardDuck';
import {TurkeyAdapter} from './TurkeyAdapter';
import {WildTurkey} from './WildTurkey';

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log('The Turkey says...');
turkey.gobble();
turkey.fly();

console.log('\nThe Duck says...');
duck.quack();
duck.fly();

console.log('\nThe TurkeyAdapter says...');
turkeyAdapter.quack();
turkeyAdapter.fly();
