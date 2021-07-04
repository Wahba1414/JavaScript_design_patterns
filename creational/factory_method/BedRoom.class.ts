import { Room } from './Room.abstract';
import { Chair } from './Chair.interface';
import { LightChair } from './LightChair.class';
import { HeavyChair } from './HeavyChair.class';

export class BedRoom extends Room {
  _name = 'Bed Room';

  createChair(style: string): Chair {
    switch (style) {
      case 'light':
        return new LightChair();

      case 'heavy':
        return new HeavyChair();
    }
  }

}