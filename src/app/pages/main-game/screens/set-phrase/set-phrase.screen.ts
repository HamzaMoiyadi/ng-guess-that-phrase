import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { Router } from '@angular/router';

@Component({
  selector: "game-main-game-set-phrase",
  templateUrl: "./set-phrase.screen.html",
  styleUrls: ["./set-phrase.screen.scss"]
})
export class SetPhraseScreen implements OnInit {
  phraseSetSub$: Subscription;
  phraseSets: PhraseSet[] = [];
  
  constructor(
    private _miniStore: MiniStoreService,
    private _firestore: FirestoreService, private _router: Router
  ) {}

  ngOnInit() {
    this.phraseSetSub$ = this._miniStore
      .getAllPhrases()
      .subscribe((phraseSets: PhraseSet[]) => {
        if (!!phraseSets) {
          this.phraseSets = phraseSets;
        }
      });
  }

  useSet(id: string) {
    console.log("id is ", id);
    let x: PhraseSet = { id: "", name: "", phrases: [] };
    let y = this.phraseSets.filter((set: PhraseSet) => this._getSet(set, id));
    x = y[0];
    this._miniStore.setPhraseSetToUse(x);
    
  }
  private _getSet(set: PhraseSet, matchingId: string) {
    return set["id"] === matchingId ? true : false;
  }
  startGame(){
    this._router.navigate(['/main-game/game'])
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.phraseSetSub$.unsubscribe();
  }
}
