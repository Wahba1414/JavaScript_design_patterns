import { Button } from './Button.interface';


export class MacButtton1 implements Button {
  draw(): void {
    console.log('Draw Macbutton1');
  }
}

export class MacButtton2 implements Button {
  draw(): void {
    console.log('Draw Macbutton2');
  }
}