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
  showSucessMessage: boolean;
  serverErrorMessages: string;

  ngOnInit() {
  }

  createUser(form?: NgForm) {
    this.authservice.postUsuario(form.value)
      .subscribe( res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.limpiarForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Algo está mal, por favor, contacta con un Administrador.';
        }
      }
    );
  }

  limpiarForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
