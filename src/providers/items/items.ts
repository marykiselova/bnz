import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Contact } from '../../models/contact';

@Injectable()
export class Items {

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/profiles/me/contacts', params).map((response) => <Contact[]>response['contacts']);;
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
