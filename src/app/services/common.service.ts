import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { MiniStoreService } from "./mini-store/mini-store.service";
import { filter } from "rxjs/operators";
import { PhraseSet } from "../models/phrases.model";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  // Reason we use a Subject here and not a BehaviourSubject is because any Subscription to a BehaviourSubject's stream will always emit the latest value in the BehaviourSubject, and we don't want that to happen when the next phrase comes in, to have the previously highlighted characters be shown again
  private whichCharacterToShow: Subject<string> = new Subject<string>();
  constructor(private _miniStore: MiniStoreService) {}

  getWhichCharacterToShow() {
    return this.whichCharacterToShow.asObservable();
  }
  setWhichCharacterToShow(character: string) {
    console.log("character set ", character);

    this.whichCharacterToShow.next(character);
  }

  isSpace(character: string): boolean {
    // console.log("character in service is ", character);

    let spaceRegex: RegExp = /\s/;
    // console.log("test is succesful? ", spaceRegex.test(character));

    return spaceRegex.test(character);
  }
  hashCode(s): string {
    return s.split("").reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  makeRandomCode(length): string {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getPhraseSetToUse(id: string) {
    return this._miniStore.getAllPhrases().pipe(
      filter((set: PhraseSet) => {
        return set["id"] === id;
      })
    );
  }
}
