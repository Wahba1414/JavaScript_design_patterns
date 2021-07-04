import { Chair } from './Chair.interface';

export class HeavyChair implements Chair {
  create(): void {
    console.log('Creating a heavy chair');
  }

  paint(): void {
    console.log('Painting a heavy chair');
  }

  box(): void {
    console.log('boxing a heavy chair');
  }
}