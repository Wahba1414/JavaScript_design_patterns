import { Espresso } from './Beverage.class';
import { Creem } from './creem.class';
import { Mocha } from './mocha.class';

export function decoratorMain(): void {
  let beverage = new Espresso(null);

  beverage = new Mocha(beverage);
  beverage = new Mocha(beverage);
  beverage = new Mocha(beverage);
  beverage = new Creem(beverage);
  beverage = new Creem(beverage);
  beverage = new Creem(beverage);


  console.log(`cost: ${beverage.cost()}`);
  console.log(`description: ${beverage.getDescription()}`);
}