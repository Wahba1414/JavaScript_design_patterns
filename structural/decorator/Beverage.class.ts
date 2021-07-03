import { Item } from './Item.interface';

export class Espresso implements Item {
  _item: Item;
  _cost = 20;
  _description = 'Espresso';

  constructor(item: Item) {
    this._item = item;
  }


  cost(): number {
    let totalCost = 0;

    if (this._item) totalCost += this._item.cost();

    totalCost += this._cost;

    return totalCost;

  }

  getDescription(): string {
    let fullDescription = '';

    if (this._item) fullDescription += this._item.getDescription();

    fullDescription += this._description + ', ';

    return fullDescription;
  }


}