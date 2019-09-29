import { Component, OnInit, ViewChildren } from "@angular/core";
import { CommonService } from "src/app/services/common.service";

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
  phrases: Array<string> = [
    // "H a m",
    // "Put lipstick on a pig",
    // "Piece of cake",
    // "Scoot over"
    "Shakir Moiyadi",
    "Shabbir Moiyadi"
  ];

  currBrokenPhrase: CharactersFromPhrase[] = [];
  currPhrase: string = "";
  currIndex: number = null;

  index: number = -1;
  showLetterInput: string;
  letterBeingShown: string = "";
  showCharacter: object = {};

  constructor(private _common: CommonService) {}

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    this.index = 0;
    this.setCurrBrokenPhrase(this.phrases[this.index]);
    // this.nextPhrase();
  }

  showLetter(letter?: string) {
    // if(!letter) {

    // }
    let currPhrase = this.phrases[this.index];
    let currPhraseIndex = this.index;
    let tempArray: number[] = this.getAllIndices(
      this.showLetterInput,
      currPhrase
    );
    if (tempArray.length) {
      this._common.setWhichCharacterToShow(this.showLetterInput);
    } else {
      alert("nai hai dost");
    }

    // console.log("letter to be shown is ", this.showLetterInput);
    // this.letterBeingShown = this.showLetterInput;

    // if ( === -1) {
    //   alert("letter nai hai dost");
    // }
  }

  nextPhrase() {
    this.index = (this.index + 1) % this.phrases.length;
    // this.currBrokenPhrase = [];
    this.setCurrBrokenPhrase(this.phrases[this.index]);
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
}
