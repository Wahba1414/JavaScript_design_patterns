import { BedRoom } from './BedRoom.class';
import { Room } from './Room.abstract';

export function factoryMethodMain(): void {
  const room: Room = new BedRoom();

  room.create('light');
  room.getName();

  console.log('\n');

  const room2: Room = new BedRoom();

  room2.create('heavy');
  room.getName();

}