import { Component, OnInit } from "@angular/core";
import { PhraseSet, Phrase } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";
import { filter, tap } from "rxjs/operators";
import { of, from, Observable } from "rxjs";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "game-game-screen",
  templateUrl: "./game.screen.html",
  styleUrls: ["./game.screen.scss"]
})
export class GameScreen implements OnInit {
  set: PhraseSet;
  constructor(
    private _miniStore: MiniStoreService,
    private _common: CommonService
  ) {
    this.set = { id: "", name: "", phrases: [{ phrase: "", hint: "" }] };
  }

  ngOnInit(): void {
    this._miniStore.getPhraseSetToUse().subscribe((id: string) => {
      console.log(id);
      this._common.getPhraseSetToUse(id).subscribe((set: PhraseSet) => {
        this.set = set;
      });
    });
  }
}
