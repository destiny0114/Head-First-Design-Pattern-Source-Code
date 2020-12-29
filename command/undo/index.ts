import {CeilingFan} from './CeilingFan';
import {CeilingFanMediumCommand} from './CeilingFanMediumCommand';
import {CeilingFanOffCommand} from './CeilingFanOffCommand';
import {CeilingFanHighCommand} from './CeilingFanHighCommand';
import {Light} from './Light';
import {LightOffCommand} from './LightOffCommand';
import {LightOnCommand} from './LightOnCommand';
import {RemoteControlWithUndo} from './RemoteControlWithUndo';

const remoteControl = new RemoteControlWithUndo();

const livingRoomLight = new Light('Living Room');

const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);

remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();

const ceilingFan = new CeilingFan('Living Room');

const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();

remoteControl.onButtonWasPushed(1);
console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
