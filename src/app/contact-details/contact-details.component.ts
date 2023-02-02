import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  step: any = 1;
  contactForm: any;
  submitMessage = '';
  myForm: any;
  constructor( private formBuilder: FormBuilder, private firestore: AngularFirestore) {
    
  }

  ngOnInit(): void {
    // this.myForm = this.firestore.collection('userDetails');
    // this.contactForm = this.formBuilder.group({
    //   name:[null,Validators.required],
    //   dob:[null,Validators.required],
    //   gender:[null,Validators.required],
    //   address:[null,Validators.required]
    // }
    // )
  }

  // submitDetails(value:any) {
  //   this.myForm.add(value).then((res: any)=>{
  //     this.submitMessage = 'Submitted';
  //   })
  //   .catch((err: any)=>{
  //     console.log(err);
  //   })
  //   console.log(value);
  // }

  submit() {
    this.step = this.step + 1;
  }
  
}
