import { JumpBehavior } from './JumpBehavior.interface';

export class Animal {
  private _jumpBehavior: JumpBehavior;

  constructor(jumpBehavior: JumpBehavior) {
    this._jumpBehavior = jumpBehavior;
  }

  eat(): void {
    console.log('Inside eat function');
  }

  performJump(): void {
    this._jumpBehavior.Jump();
  }

  changeJumpBehavior(jumpBehavior: JumpBehavior): void {
    this._jumpBehavior = jumpBehavior;
  }
}
