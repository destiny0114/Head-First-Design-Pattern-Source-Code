import {ChocolateBoiler} from './ChocolateBoiler';

const boiler = ChocolateBoiler.getInstance();
boiler.fill();
// after fill isEmpty is false
console.log(boiler.isEmpty());
boiler.boil();
boiler.drain();

// will return the existing instance
const boiler2 = ChocolateBoiler.getInstance();
// after drain isEmpty is true
console.log(boiler2.isEmpty());
