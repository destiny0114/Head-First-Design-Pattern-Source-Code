import {GarageDoor} from './GarageDoor';
import {GarageDoorOpenCommand} from './GarageDoorOpenCommand';
import {Light} from './Light';
import {LightOnCommand} from './LightOnCommand';
import {SimpleRemoteControl} from './SimpleRemoteControl';

const remote = new SimpleRemoteControl();
const light = new Light();
const garageDoor = new GarageDoor();
const lightOn = new LightOnCommand(light);
const garageOpen = new GarageDoorOpenCommand(garageDoor);
remote.setCommand(lightOn);
remote.buttonWasPressed();
remote.setCommand(garageOpen);
remote.buttonWasPressed();
