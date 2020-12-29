import {FlyBehavior} from './FlyBehavior';

export class FlyWithRocket implements FlyBehavior {
	fly(): void {
		console.log("I'm flying with a rocket");
	}
}
