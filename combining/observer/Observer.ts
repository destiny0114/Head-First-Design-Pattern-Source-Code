import {QuackObservable} from './QuackObservable';

export interface Observer {
	update(duck: QuackObservable): void;
}
