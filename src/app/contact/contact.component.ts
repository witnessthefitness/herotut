import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './contact.service';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading....';

    constructor(private contactService: ContactService, ) {

    }

    ngOnInit(): void {
        this.contactService.getContacts().then(contacts => {
            this.contacts = contacts;
            this.contact = contacts[0];
            this.msg = '';
        });
    }

    next() {
        let current = 1 + this.contacts.indexOf(this.contact);
        if (current >= this.contacts.length) { current = 0 }
        this.contact = this.contacts[current];
    }

    onSubmit() {
        // POST-DEMO TODO: do something like save it
        this.displayMessage('Saved ' + this.contact.name);
    }

    newContact() {
        this.displayMessage('New contact');
        this.contact = { id: 42, name: '' };
        this.contacts.push(this.contact);
    }

    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}