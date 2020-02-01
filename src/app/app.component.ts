import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  x:any;
  sampleform;
  constructor(private fb:FormBuilder){
    this.sampleform = new FormGroup({
    name : new FormControl(),
    email: new FormControl()
  });
}
  send(formdata){
    this.sampleform.setValue({
      name:formdata.name,
      email:formdata.email
    })
    console.log(this.sampleform.value.name)
  }
  update(formdata){
    this.sampleform.patchValue({
      name:formdata.name
    });
    this.x=  this.sampleform.value.name;
    console.log(this.x)
  }
}
