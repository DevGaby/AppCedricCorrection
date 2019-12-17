import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Contact } from '../../contacts';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contacts: Contact [] = null;
  contact: any;

  constructor(private router: Router, private contactsService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  /*@Input() contact: Contact; // propriété d'entrée du composant
  types: Array<string>; // types disponibles pour un contact : 'Eau', 'Feu', etc ...
  constructor(
      private contactsService: ContactsService,
      private router: Router) { }

  ngOnInit() {
      // Initialisation de la propriété types
      this.types = this.contactsService.getContactTypes(); // Cours109 POUR LE TYPE !!!!!!!!!!!!!!!!
  }

  // Détermine si le type passé en paramètres appartient ou non au contact en cours d'édition.
  hasType(type: string): boolean {
      let index = this.contact.types.indexOf(type);
      if (index > -1) return true;
      return false;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au contact en cours d'édition.
  selectType($event: any, type: string): void {
      let checked = $event.target.checked;
      if (checked) {
          this.contact.types.push(type);
      } else {
          let index = this.contact.types.indexOf(type);
          if (index > -1) {
              this.contact.types.splice(index, 1);
          }
      }
  }

  // Valide le nombre de types pour chaque contact
  isTypesValid(type: string): boolean {
      if (this.contact.types.length === 1 && this.hasType(type)) {
          return false;
      }
      if (this.contact.types.length >= 3 && !this.hasType(type)) {
          return false;
      }

      return true;
  }*/

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(form: NgForm) {
    console.log("Submit form !");
    let link = ['/contact', this.contact.id];
    this.router.navigate(link);
  }

}
