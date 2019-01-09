import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AuthService]
})
export class UserProfileComponent implements OnInit {
  userDetails;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getPerfil();
  }

  getPerfil() {
      this.authService.getUserProfile(this.authService.getIdUsuario())
        .subscribe(res => {
          this.userDetails = res;
        });
    }
}
