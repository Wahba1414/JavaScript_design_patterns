import { Subject } from './Subject.interface';

export interface Observer {
  _id;

  unsubscribe(subject: Subject): void;

  update(newMessage: string): void;
}