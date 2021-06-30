import { Observer } from './Observer.interface';
import { Subject } from './Subject.interface';

export class Dashboard implements Observer {
  _id: string;
  _observable: Subject;
  msg: string;

  constructor(subject: Subject, id: string) {
    this._observable = subject;
    this._observable.attach(this);

    this._id = id;
  }

  update(msg: string): void {
    this.msg = msg;
  }

  unsubscribe(): void {
    this._observable.detach(this);
  }

  display(): void {
    console.log(`Dashboard with ID (${this._id})  --->  the latest message: ${this.msg}`);
  }

}