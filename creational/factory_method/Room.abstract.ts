import { Chair } from './Chair.interface';


export abstract class Room {
  private _name: string;

  getName(): string {
    return this._name;
  }

  create(style: string): void {
    console.log('start creating a new Bed room');
    // Work on the Room's items, Ex: chair.

    // Create a chair 
    const chair: Chair = this.createChair(style);

    // Do
    chair.create();
    chair.paint();
    chair.box();


    // Other items.

    console.log('Finish creating a new Bed room');

  }


  abstract createChair(style: string): Chair;
}