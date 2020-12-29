import {GumballMachine} from './GumballMachine';
import {GumballMonitor} from './GumballMonitor';

const gumballMachine = new GumballMachine('Gumball Seattle 122', 10);
const monitor = new GumballMonitor(gumballMachine);

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

monitor.report();
