import { Button } from './Button.interface';
// import { Checkbox } from './Checkbox.interface';

export interface GUI {
  createButton(): Button;
  // createCheckbox(): Checkbox;
}