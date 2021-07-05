import { Button } from './Button.interface';
import { GUI } from './GUI.interface';
import { WinButtton1 } from './winbuttons.class';
// import { Checkbox } from './Checkbox.interface';


export class WinGUI implements GUI {

  createButton(): Button {
    return new WinButtton1();
  }

  // createCheckbox(): Checkbox;
}