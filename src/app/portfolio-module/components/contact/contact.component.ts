import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: '../../components/contact/contact.component.html',
  styleUrls: ['../../components/contact/contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  validate(fullna: any) {}

  showForm(f: object) {
    console.log(f);
  }
}
