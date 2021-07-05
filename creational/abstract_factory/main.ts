import { GUI } from './GUI.interface';
import { MacGUI } from './MacGUI.class';
import { WinGUI } from './WinGUI.class';
import { OS } from './OS.class';


export function abstractFactoryMain(): void {

  function run(_OS: string) {
    let gui: GUI;

    switch (_OS) {
      case 'WIN':
        gui = new WinGUI();
        break;

      case 'Mac':
        gui = new MacGUI;
        break;
    }


    const os = new OS(gui);

    os.drawUI();
  }

  run('WIN');
  run('Mac');

}