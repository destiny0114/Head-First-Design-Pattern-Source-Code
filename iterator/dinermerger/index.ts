import {DinerMenu} from './DinerMenu';
import {PancakeHouseMenu} from './PancakeHouseMenu';
import {Waitress} from './Waitress';

const dinerMenu = new DinerMenu();
const pancakeHouseMenu = new PancakeHouseMenu();

const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
waitress.printMenu();
