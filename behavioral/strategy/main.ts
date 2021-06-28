import { Lion } from './Lion.derived.class';

import { LongJump, ShortJump } from './JumpBehaviors.algorithms.class';


export function strategyMain(): void {
  const longJump: LongJump = new LongJump();
  const shortJump: ShortJump = new ShortJump();

  const lion: Lion = new Lion(longJump, true);


  lion.eat();

  lion.isKing();

  lion.performJump();

  // change jump behavior in run time

  lion.changeJumpBehavior(shortJump);

  lion.performJump();

}