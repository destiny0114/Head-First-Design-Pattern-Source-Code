import {Amplifier} from './Amplifier';
import {CdPlayer} from './CdPlayer';
import {HomeTheaterFacade} from './HomeTheaterFacade';
import {MonitorScreen} from './MonitorScreen';
import {PopcornPopper} from './PopcornPopper';
import {Projector} from './Projector';
import {StreamingPlayer} from './StreamingPlayer';
import {TheaterLights} from './TheaterLights';
import {Tuner} from './Tuner';

const amp = new Amplifier('Amplifier');
const tuner = new Tuner('AM/FM Tuner', amp);
const player = new StreamingPlayer('Streaming Player', amp);
const cd = new CdPlayer('CD Player', amp);
const projector = new Projector('Projector', player);
const lights = new TheaterLights('Theater Ceiling Lights');
const screen = new MonitorScreen('Theater Screen');
const popper = new PopcornPopper('Popcorn Popper');

const homeTheater = new HomeTheaterFacade(amp, tuner, player, projector, screen, lights, popper);

homeTheater.watchMovie('Titanic');
homeTheater.endMovie();
