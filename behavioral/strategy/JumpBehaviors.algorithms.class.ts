import { JumpBehavior } from './JumpBehavior.interface';

export class LongJump implements JumpBehavior {
  Jump(): void {
    console.log('Long Jump');
  }
}

export class ShortJump implements JumpBehavior {
  Jump(): void {
    console.log('Short Jump');
  }
}