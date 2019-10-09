import { Component, OnInit } from "@angular/core";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "game-main-game-index",
  templateUrl: "./index.screen.html",
  styleUrls: ["./index.screen.scss"]
})
export class IndexScreen implements OnInit {
  set: PhraseSet;
  constructor(
    private _miniStore: MiniStoreService,
    private _common: CommonService
  ) {
    this.set = { id: "", name: "", phrases: [] };
  }

  ngOnInit(): void {
    this._miniStore.getPhraseSetToUse().subscribe((id: string) => {
      this._common.getPhraseSetToUse(id).subscribe((selectedSet: PhraseSet) => {
        this.set = selectedSet;
      });
    });
  }
}
