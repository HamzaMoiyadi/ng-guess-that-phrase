import { Component, OnInit } from "@angular/core";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";

@Component({
  selector: "game-game-screen",
  templateUrl: "./game.screen.html",
  styleUrls: ["./game.screen.scss"]
})
export class GameScreen implements OnInit {
  set: PhraseSet;
  constructor(private _miniStore: MiniStoreService) {
    this.set = { id: "", name: "", phrases: [] };
  }

  ngOnInit(): void {
    this._miniStore.getPhraseSetToUse().subscribe((set: PhraseSet) => {
      this.set = { ...this.set, ...set };
    });
  }
}
