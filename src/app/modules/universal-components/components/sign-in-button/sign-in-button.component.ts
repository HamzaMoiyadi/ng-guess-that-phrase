import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

// fontawesome
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "game-sign-in-button",
  templateUrl: "./sign-in-button.component.html",
  styleUrls: ["./sign-in-button.component.scss"]
})
export class SignInButtonComponent implements OnInit {
  faGoogle = faGoogle;
  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  signIn() {
    this._auth
      .googleSignIn()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
