import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authservice: AuthService) {}

  ngOnInit() {
  }

  createUser(form?: NgForm) {
    this.authservice.postUsuario(form.value)
      .subscribe( res => {
        console.log(res);
        this.limpiarForm(form);
      });
  }

  limpiarForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
