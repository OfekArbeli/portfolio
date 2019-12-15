import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      cellularNumber: ['', [
        Validators.required,
        Validators.pattern('[0][5][0|2|3|4|5|9][0-9]{7}$')
      ]],
      subject: ['', [
        Validators.required
      ]],
      message: ['', [
        Validators.required
      ]]
    })
  }
  onSubmit(){
    console.log("submitted");
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get cellularNumber(){
    return this.contactForm.get('cellularNumber');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get message(){
    return this.contactForm.get('message');
  }
}
