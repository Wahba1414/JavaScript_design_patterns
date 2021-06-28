import { Animal } from './Animal.base.class';
import { JumpBehavior } from './JumpBehavior.interface';

export class Lion extends Animal {
  private _isKing: boolean;

  constructor(jumpBehavior: JumpBehavior, isKing: boolean) {
    super(jumpBehavior);
    this._isKing = isKing;
  }

  // other custom function
  isKing(): void {
    console.log('Is this lion a King? ', this._isKing ? 'Yes' : 'No');
  }
}