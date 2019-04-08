import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  UserForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.UserForm = this._fb.group({
      name: [null, [Validators.required]],
      lname: [null, [Validators.required]],
      company: [null, [Validators.required]]
    })
  }

}
