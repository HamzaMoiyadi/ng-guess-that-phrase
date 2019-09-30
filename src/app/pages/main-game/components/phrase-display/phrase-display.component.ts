import { Component, OnInit, ViewChildren, Input } from "@angular/core";
import { CommonService } from "src/app/services/common.service";
import { PhraseSet } from "src/app/models/phrases.model";
import { MiniStoreService } from "src/app/services/mini-store/mini-store.service";

interface CharactersFromPhrase {
  letter: string;
  index: string;
  visible: boolean;
}

@Component({
  selector: "game-phrase-display",
  templateUrl: "./phrase-display.component.html",
  styleUrls: ["./phrase-display.component.scss"]
})
export class PhraseDisplayComponent implements OnInit {
  @Input("phraseSet") set setPhraseSetToUse(set: PhraseSet) {
    console.log("set is ", set);

    if (set) {
      this.phraseSet = set;
      this.initGame();
    }
  }

  phraseSet: PhraseSet;

  currBrokenPhrase: CharactersFromPhrase[] = [];

  currIndex: number = null;

  index: number = -1;
  showLetterInput: string;
  letterBeingShown: string = "";
  showCharacter: object = {};

  constructor(
    private _common: CommonService,
    private _miniStore: MiniStoreService
  ) {}

  ngOnInit() {}

  initGame() {
    this.index = 0;
    this.setCurrBrokenPhrase(this.phraseSet["phrases"][this.index]["phrase"]);
    // this.nextPhrase();
  }

  showLetter(letter?: string) {
    // if(!letter) {

    // }
    let letterToShow = letter || this.showLetterInput;
    let currPhrase = this.currentPhrase;
    let currPhraseIndex = this.index;
    let tempArray: number[] = this.getAllIndices(letterToShow, currPhrase);
    if (tempArray.length) {
      this._common.setWhichCharacterToShow(letterToShow.toUpperCase());
    } else {
      alert("nai hai dost");
    }
  }

  showAll() {
    this.currBrokenPhrase.forEach((letter: CharactersFromPhrase) => {
      // console.log(letter['letter']);
      this.showLetter(letter["letter"]);
    });
  }

  nextPhrase() {
    this.index = (this.index + 1) % this.phraseSet["phrases"].length;
    // this.currBrokenPhrase = [];
    this.setCurrBrokenPhrase(this.phraseSet["phrases"][this.index]["phrase"]);
  }

  setCurrBrokenPhrase(phrase: string) {
    let tempArray = [];
    phrase
      .toUpperCase()
      .split("")
      .forEach((character: string, index: number) => {
        tempArray.push({
          letter: character,
          index: this._common.makeRandomCode(4),
          visible: false
        });
      });
    this.currBrokenPhrase = tempArray;
  }

  private _isSpace(phrase) {
    return /\S/.test(phrase);
  }

  getAllIndices(charToSearch: string, phrase: string): number[] {
    let x: number[] = [];
    // console.log(phrase.indexOf(charToSearch));
    phrase
      .toUpperCase()
      .split("")
      .forEach((letter, index) => {
        if (letter === charToSearch) {
          x.push(index);
        }
      });

    return x;
  }

  get currentPhrase() {
    return this.phraseSet["phrases"][this.index]["phrase"];
  }
}
