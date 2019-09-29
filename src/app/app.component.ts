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
    
  }
}
