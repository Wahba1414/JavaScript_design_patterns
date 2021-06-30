import { Observer } from './Observer.interface';

export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notifyObservers(): void;
}