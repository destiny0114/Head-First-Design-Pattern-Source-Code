import {GumballMachine} from './GumballMachine';

const gumballMachine = new GumballMachine(10);

console.log(gumballMachine.toString());

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.toString());

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

gumballMachine.refill(5);
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.toString());
