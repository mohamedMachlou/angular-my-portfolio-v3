import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'contact',
  templateUrl: '../../components/contact/contact.component.html',
  styleUrls: ['../../components/contact/contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // submitForm(f: any) {
  //   console.log(f.value);
  //   (this.contact.name = f.value.fullname),
  //     (this.contact.email = f.value.email),
  //     (this.contact.message = f.value.message),
  //     console.log(this.contact);
  // }
  /////////////
  formData = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  };
  //////////////
  inputs = document.querySelectorAll('input');

  public sendEmail() {
    // console.log(f.value);
    // (this.contact.name = f.value.fullname),
    //   (this.contact.email = f.value.email),
    //   (this.contact.message = f.value.message),

    console.log(this.formData);

    emailjs
      .send(
        'service_kkjbfj9',
        'template_y6sq7rt',
        this.formData,
        '7ALyQd9YWgjeyilwM'
      ) // Replace with your EmailJS service ID, template ID, and public key
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error: EmailJSResponseStatus) => {
          console.log('FAILED...', error.status, error.text);
        }
      );
    this.formData = {
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    };
  }

  // emailjs.send("service_kkjbfj9","template_y6sq7rt");
}
