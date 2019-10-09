import { Component, OnInit } from "@angular/core";
import { FirestorePhraseSet } from "src/app/models/phrases.model";
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: "game-phrase-form",
  templateUrl: "./phrase-form.component.html",
  styleUrls: ["./phrase-form.component.scss"]
})
export class PhraseFormComponent implements OnInit {
  phraseMaker: FormGroup;
  formPhrases: FormArray;
  setName: FormControl;
  constructor(private _firestore: FirestoreService) {
    this.initForm();
  }
  x: any;
  ngOnInit(): void {
    this.x = this.phrases["controls"];
    console.log(this.x);
  }

  initForm() {
    this.formPhrases = new FormArray([this._createPhrase()]);

    this.setName = new FormControl("", [Validators.required]);
    this.phraseMaker = new FormGroup({
      set_name: this.setName,
      phrases: this.formPhrases
    });

    console.log("Form init with ", this.phraseMaker);
    console.log(this.phrases);
  }

  _createPhrase(): FormGroup {
    return new FormGroup({
      phrase: new FormControl("", [Validators.required]),
      hint: new FormControl("", [Validators.required])
    });
  }
  addPhrase() {
    this.phrases.push(this._createPhrase());
  }
  removePhrase(index: number) {
    this.phrases.removeAt(index);
  }
  makePhraseSet(formedSet: {
    set_name: string;
    phrases: [{ phrase: string; hint: string }];
  }) {
    // clean string
    let tempPhrases: string[] = [];
    let tempHints: string[] = [];
    for (let i = 0; i < formedSet.phrases.length; i++) {
      tempPhrases.push(formedSet.phrases[i]["phrase"]);
      tempHints.push(formedSet.phrases[i]["hint"]);
    }

    let x: FirestorePhraseSet = {
      name: formedSet["set_name"],
      phrases: tempPhrases,
      hints: tempHints
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

  get phrases() {
    return this.phraseMaker.get("phrases") as FormArray;
  }
}
