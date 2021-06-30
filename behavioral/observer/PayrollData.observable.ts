import { Observer } from './Observer.interface';
import { Subject } from './Subject.interface';

export class PayrollData implements Subject {
  _observers: Observer[] = [];
  _latestMessage: string;

  dataChanged(msg: string): void {
    this._latestMessage = msg;
    this.notifyObservers();
  }

  attach(observer: Observer): void {
    this._observers.push(observer);
  }

  detach(observer: Observer): void {
    this._observers.filter((o) => o._id != observer._id);
  }

  notifyObservers(): void {
    this._observers.forEach((o) => o.update(this._latestMessage));
  }

}