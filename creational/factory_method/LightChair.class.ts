import { Chair } from './Chair.interface';

export class LightChair implements Chair {
  create(): void {
    console.log('Creating a light chair');
  }

  paint(): void {
    console.log('Painting a light chair');
  }

  box(): void {
    console.log('boxing a light chair');
  }
}