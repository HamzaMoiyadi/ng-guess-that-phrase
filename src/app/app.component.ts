import { Component } from "@angular/core";
import { FirestoreService } from "./services/firestore/firestore.service";
import { map, catchError, take } from "rxjs/operators";
import { PhraseSet, Phrase } from "./models/phrases.model";
import { Subscription, of } from "rxjs";
import { MiniStoreService } from "./services/mini-store/mini-store.service";
import { AuthService } from "./services/auth/auth.service";

import { DEFAULTS } from "src/app/config/defaults";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "guess-that-phrase";

  phraseSets: PhraseSet[] = [];
  phraseSetsSub$: Subscription;
  constructor(
    private _firestore: FirestoreService,
    private _miniStore: MiniStoreService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // since this is the first component that loads ever for a user , makes sense to get all phrases from the db and send to the store from here. if the user is logged in of course.
    this._auth.user$
      .pipe(
        map(user => !!user) // <-- map to boolean
      )
      .subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          console.log("nigga we loggedin, let's get data");

          this._firestore
            .getAllPhrasesFromDB()
            .then((phraseSets: PhraseSet[]) => {
              // set all phrases
              phraseSets.forEach((phraseSet: PhraseSet) => {
                this._miniStore.setNewPhrase(phraseSet);
              });
              // set default set
              console.log("phrase sets are ", phraseSets);
              let tempPhraseSet: PhraseSet = phraseSets.filter(
                (set: PhraseSet, index: number) => {
                  return set["name"] === DEFAULTS.PHRASE_SET;
                }
              )[0];
              console.log("default phrase set is ", tempPhraseSet);
              this._miniStore.setPhraseSetToUse(tempPhraseSet["id"]);
            });
        } else {
          console.log("not fetching user details coz we ain't authorized");
        }
      });
  }
}
