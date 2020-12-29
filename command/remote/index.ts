import {CeilingFan} from './CeilingFan';
import {CeilingFanOffCommand} from './CeilingFanOffCommand';
import {CeilingFanOnCommand} from './CeilingFanOnCommand';
import {GarageDoor} from './GarageDoor';
import {GarageDoorCloseCommand} from './GarageDoorCloseCommand';
import {GarageDoorOpenCommand} from './GarageDoorOpenCommand';
import {Light} from './Light';
import {LightOffCommand} from './LightOffCommand';
import {LightOnCommand} from './LightOnCommand';
import {RemoteControl} from './RemoteControl';
import {Stereo} from './Stereo';
import {StereoOffCommand} from './StereoOffCommand';
import {StereoOnWithCDCommand} from './StereoOnWithCDCommand';

const remoteControl = new RemoteControl();

const livingRoomLight = new Light('Living Room');
const kitchenLight = new Light('Kitchen');
const ceilingFan = new CeilingFan('Living Room');
const garageDoor = new GarageDoor('Garage Door');
const stereo = new Stereo('Living Room');

const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);

const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

const garageDoorUp = new GarageDoorOpenCommand(garageDoor);
const garageDoorDown = new GarageDoorCloseCommand(garageDoor);

const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
