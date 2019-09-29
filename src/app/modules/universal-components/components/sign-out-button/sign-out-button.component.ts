import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "game-sign-out-button",
  templateUrl: "./sign-out-button.component.html",
  styleUrls: ["./sign-out-button.component.scss"]
})
export class SignOutButtonComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  signOut() {
    this._auth
      .signOut()
      .then(val => {
        console.log(val);
        this._router.navigate(["/login"]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
