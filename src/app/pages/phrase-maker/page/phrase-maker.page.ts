import { Component, OnInit } from "@angular/core";
import { PhraseSet } from "src/app/models/phrases.model";
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: "game-phrase-maker",
  templateUrl: "./phrase-maker.page.html",
  styleUrls: ["./phrase-maker.page.scss"]
})
export class PhraseMakerPage implements OnInit {
  setName: string;
  setString: string;
  constructor(private _firestore: FirestoreService) {}

  ngOnInit(): void {}

  makePhraseSet(str: string, name: string) {
    // clean string
    let tempStrArr: string[] = str.split(",").map(phrase => phrase.trim());

    let x: PhraseSet = {
      name: name,
      phrases: tempStrArr
    };

    this._firestore
      .addPhraseSet(x)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
