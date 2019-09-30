import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { User } from "src/app/models/user.model";
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { map, catchError } from "rxjs/operators";
import { PhraseSet } from "src/app/models/phrases.model";
import { of } from "rxjs";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";

@Component({
  selector: "game-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  userDisplayName: string;
  buttonLinks = [
    { link: "main-game", view_name: "Start Game" },
    { link: "make-phrase-set", view_name: "Make your own Phrase Set" },
    { link: "phrase-setter", view_name: "Set phrase for your game" }
  ];

  constructor(
    public auth: AuthService,
    private _firestore: FirestoreService,
    private _miniStore: MiniStoreService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user: User) => {
      if (user) {
        this.userDisplayName = user["displayName"];
      }
    });

    
    
  }

}
