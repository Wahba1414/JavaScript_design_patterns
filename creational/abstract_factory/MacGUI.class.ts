import { Button } from './Button.interface';
import { GUI } from './GUI.interface';
import { MacButtton1 } from './macButtons.class';
// import { Checkbox } from './Checkbox.interface';


export class MacGUI implements GUI {

  createButton(): Button {
    return new MacButtton1();
  }

  // createCheckbox(): Checkbox;
}