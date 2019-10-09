import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { PhraseSet } from "src/app/models/phrases.model";

@Component({
  selector: "game-phrase-set-display",
  templateUrl: "./phrase-set-display.component.html",
  styleUrls: ["./phrase-set-display.component.scss"]
})
export class PhraseSetDisplayComponent implements OnInit {
  @Output() setSelect: EventEmitter<string> = new EventEmitter<string>();
  @Input("set") set setDisplaySet(set: PhraseSet) {
    this.displaySet = set;
  }
  displaySet: PhraseSet;
  constructor() {}

  ngOnInit() {}

  useSet(phraseSetId: string) {
    this.setSelect.emit(phraseSetId);
  }
}
