import { Button } from './Button.interface';


export class WinButtton1 implements Button {
  draw(): void {
    console.log('Draw Winbutton1');
  }
}

export class WinButtton2 implements Button {
  draw(): void {
    console.log('Draw Winbutton2');
  }
}