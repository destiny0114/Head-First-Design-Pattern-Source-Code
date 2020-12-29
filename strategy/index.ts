import {MallardDuck} from './MallardDuck';
import {ModelDuck} from './ModelDuck';
import {FlyWithRocket} from './FlyWithRocket';

const mallardDuck = new MallardDuck();
mallardDuck.performQuack();
mallardDuck.performFly();

const modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyWithRocket());
modelDuck.performFly();
