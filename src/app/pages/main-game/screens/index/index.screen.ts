import { Component, OnInit } from "@angular/core";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";

@Component({
  selector: "game-main-game-index",
  templateUrl: "./index.screen.html",
  styleUrls: ["./index.screen.scss"]
})
export class IndexScreen implements OnInit {
  set: PhraseSet;
  constructor(private _miniStore: MiniStoreService) {
    this.set = { id: "", name: "", phrases: [] };
  }

  ngOnInit(): void {
    this._miniStore.getPhraseSetToUse().subscribe((set: PhraseSet) => {
      console.log("phrase set to use called");

      this.set = { ...this.set, ...set };
    });
  }
}
