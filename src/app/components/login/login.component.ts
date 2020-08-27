import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {
  RegularExpressionsService,
  CommonBackgroundService,
  EncryptDecryptService,
} from '../../shared';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private route:Router, private regExpressions: RegularExpressionsService,
    private commonBackgroundServices: CommonBackgroundService,) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
  login() {
  
    if (this.form.valid) {
      if (this.form.get('email').value === 'admin@admin.com' && this.form.get('password').value === '123456') {
       
       this.route.navigate(['/dashboard']);
      } 
    }
  }

}
