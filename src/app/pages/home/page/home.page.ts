import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "game-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  userDisplayName: string;
  buttonLinks = [
    { link: "main-game", view_name: "Start Game" },
    { link: "phrase-set-maker", view_name: "Make your own Phrase Set" },
    { link: "phrase-setter", view_name: "Set phrase for your game" }
  ];

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.user$.subscribe((user: User) => {
      this.userDisplayName = user["displayName"];
    });
  }
}
