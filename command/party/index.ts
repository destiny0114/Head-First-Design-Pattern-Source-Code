import {Light} from './Light';
import {LightOffCommand} from './LightOffCommand';
import {LightOnCommand} from './LightOnCommand';
import {RemoteControlWithUndo} from './RemoteControlWithUndo';
import {TV} from './TV';
import {MacroCommand} from './MacroCommand';
import {Stereo} from './Stereo';
import {StereoOffCommand} from './StereoOffCommand';
import {TVOffCommand} from './TVOffCommand';
import {TVOnCommand} from './TVOnCommand';
import {Hottub} from './Hottub';
import {StereoOnWithCDCommand} from './StereoOnWithCDCommand';
import {HottubOnCommand} from './HottubOnCommand';
import {HottubOffCommand} from './HottubOffCommand';

const remoteControl = new RemoteControlWithUndo();

const light = new Light('Living Room');
const tv = new TV('Living Room');
const stereo = new Stereo('Living Room');
const hottub = new Hottub();

const lightOn = new LightOnCommand(light);
const stereoOn = new StereoOnWithCDCommand(stereo);
const tvOn = new TVOnCommand(tv);
const hottubOn = new HottubOnCommand(hottub);
const lightOff = new LightOffCommand(light);
const stereoOff = new StereoOffCommand(stereo);
const tvOff = new TVOffCommand(tv);
const hottubOff = new HottubOffCommand(hottub);

const partyOn = [lightOn, stereoOn, tvOn, hottubOn];
const partyOff = [lightOff, stereoOff, tvOff, hottubOff];

const partyOnMacro = new MacroCommand(partyOn);
const partyOffMacro = new MacroCommand(partyOff);

remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

console.log(remoteControl.toString());
console.log('--- Pushing Macro On---');
remoteControl.onButtonWasPushed(0);
console.log('--- Pushing Macro Off---');
remoteControl.offButtonWasPushed(0);
