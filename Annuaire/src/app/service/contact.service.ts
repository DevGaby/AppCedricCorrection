import { Injectable } from '@angular/core';
import { Contact } from '../contacts';
import { CONTACTS } from '../base-contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  // Retourne tous les contacts
  getContacts(): Contact[] {
    return CONTACTS;
  }

  // Retourne le contact avec l'identifiant passé en paramètre
  getContact(id: number): Contact {
    let contacts = this.getContacts();

    for (let index = 0; index < contacts.length; index++) {
      if (id === contacts[index].id) {
        return contacts[index];
      }
    }
  }
}
