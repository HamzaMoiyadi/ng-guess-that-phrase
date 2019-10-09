import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, ReplaySubject } from "rxjs";
import { PhraseSet } from "src/app/models/phrases.model";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class MiniStoreService {
  // default state can be initialized in the below way
  // private _emptyPhraseSet: PhraseSet = { name: "", phrases: [] };
  // All the phrases from the db
  private _allPhrases$: ReplaySubject<PhraseSet> = new ReplaySubject<
    PhraseSet
  >();
  // Only the phraseSet that will be used in the game. will store only id of the selected set for easier search
  private _selectedPhraseSet$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >("");
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor() {}

  getAllPhrases() {
    return this._allPhrases$.asObservable();
  }
  setNewPhrase(phraseSet: PhraseSet) {
    this._allPhrases$.next(phraseSet);
  }

  setPhraseSetToUse(phraseSetId: string) {
    this._selectedPhraseSet$.next(phraseSetId);
  }
  getPhraseSetToUse() {
    let x = "";
    console.log("the phrase set that will be used is ", x);

    return this._selectedPhraseSet$.asObservable();
  }

  setUserData(user: User) {
    this._user$.next(user);
  }
  getUserData() {
    return this._user$.asObservable();
  }
}
