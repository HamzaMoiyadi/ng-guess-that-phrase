import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";

@Component({
  selector: "game-phrase-setter",
  templateUrl: "./phrase-setter.page.html",
  styleUrls: ["./phrase-setter.page.scss"]
})
export class PhraseSetterPage implements OnInit, OnDestroy {
  phraseSetSub$: Subscription;
  phraseSets: PhraseSet[] = [];
  constructor(private _miniStore: MiniStoreService) {}

  ngOnInit() {
    // this.phraseSetSub$ = this._miniStore
    //   .getAllPhrases()
    //   .subscribe((phraseSets: PhraseSet[]) => {
    //     // to understand double !, consider the example
    //     // if phraseSets has a truthy value, ! will make the value as falsy
    //     // another ! on top of that will make that falsy value to true
    //     // JS is weird. But this seems like a clean way to go on the boolean value
    //     if (!!phraseSets) {
    //       console.log("phrasesets is ", phraseSets);

    //       this.phraseSets = phraseSets;
    //     }
    //   });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.phraseSetSub$.unsubscribe();
  }

  useSet(id: string) {}
}
