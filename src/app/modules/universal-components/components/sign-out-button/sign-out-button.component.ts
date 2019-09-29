import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "game-sign-out-button",
  templateUrl: "./sign-out-button.component.html",
  styleUrls: ["./sign-out-button.component.scss"]
})
export class SignOutButtonComponent implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  signOut() {
    this._auth
      .signOut()
      .then(val => {
        console.log(val);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
