import {DuckSimulator} from './DuckSimulator';
import {CountingDuckFactory} from './CountingDuckFactory';

const duckFactory = new CountingDuckFactory();
const simulator = new DuckSimulator(duckFactory);
simulator.simulate();
