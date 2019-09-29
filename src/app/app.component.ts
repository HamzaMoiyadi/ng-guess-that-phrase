import { Component } from "@angular/core";
import { FirestoreService } from "./services/firestore/firestore.service";
import { map, catchError } from "rxjs/operators";
import { PhraseSet } from "./models/phrases.model";
import { Subscription, of } from "rxjs";
import { MiniStoreService } from "./services/mini-store/mini-store.service";
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
    private _miniStore: MiniStoreService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
