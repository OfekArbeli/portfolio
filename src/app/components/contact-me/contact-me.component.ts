import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  isInView = false;
  @ViewChild('paragraph', {static:false}) paragraph: ElementRef;
  
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

  isInViewport() : boolean {
    let bounding = this.paragraph.nativeElement.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(this.isInViewport()){
      if(!this.isInView){
        this.isInView = true;
      }
    }
    else{
      if(this.isInView){
        this.isInView = false;     
      }
    }
  }


}
