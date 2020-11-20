import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  reactiveForm = new FormGroup({
    
    firstName: new FormControl(''),
    check: new FormControl ('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)])
  }); 

  /* profileForm = this.fb.group({
    firstName: [''],
    email: ['',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  }); */

  

  //modelo que se corresponde con los campos del formulario
  

  ngOnInit(): void {
  }

  submit(){
    console.warn(this.reactiveForm.value);

    
  }

  get email(){
    return this.reactiveForm.get('email');
   }

}
