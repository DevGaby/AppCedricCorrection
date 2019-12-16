import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../contacts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts: Contact[] = null;

  constructor(private router: Router, private contactsService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    console.log(this.contacts);
  }

  // Redirige vers l'url du contact sélectionné de la liste 
  selectContact(contact: Contact): void {
    console.log('Vous avez selectionné ' + contact.name + ' ' + contact.surname);
    let link = ['/contact/', contact.id];
    this.router.navigate(link);
  }

}
