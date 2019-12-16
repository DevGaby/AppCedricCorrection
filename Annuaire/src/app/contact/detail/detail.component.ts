import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contacts';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  contact: Contact = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactService) { }

  /*Initialisation de la vue du contact sélectionné*/
  ngOnInit(): void {

    let id = +this.route.snapshot.params['id']; // Récupère l'id du contact pour l'afficher
    this.contact = this.contactsService.getContact(id);

  }

  goBack(): void {
    this.router.navigate(['/contacts']);
  }

  goEdit(contact: Contact): void {
    let link = ['/contact/edit', contact.id];
    this.router.navigate(link);
  }

}
