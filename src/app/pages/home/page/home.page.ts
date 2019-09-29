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
    { link: "phrase-set-maker", view_name: "Make your own Phrase Set" },
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

    // since this is the first page user will come to after signing in, makes sense to get all phrases from the db and send to the store from here
    this._getPhrases();
  }

  private _getPhrases() {
    this._firestore
      .getAllPhrases()
      .pipe(
        map((sets: PhraseSet[]) => {
          let tempArr = sets.map((set: PhraseSet) => {
            set["phrases"] = set["phrases"].map(phrase => phrase.toUpperCase());
            return set;
          });
          return tempArr;
        }),
        catchError(err => {
          console.log("error hai dost", err);
          return of(err);
        })
      )
      .subscribe((val: PhraseSet[]) => {
        // set phraseSet array in mini-sotre for easy retrieval
        this._miniStore.setNewPhrasesFromDB(val);
      });
  }
}
