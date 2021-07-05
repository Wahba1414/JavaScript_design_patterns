import { GUI } from './GUI.interface';

export class OS {
  _gui: GUI;

  constructor(gui: GUI) {
    this._gui = gui;
  }

  drawUI(): void {
    const button = this._gui.createButton();

    button.draw();

    // const checkbox = this._gui.createButton();

    // checkbox.draw();

  }

}