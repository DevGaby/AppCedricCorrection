import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contacts';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contact: Contact = null;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}
