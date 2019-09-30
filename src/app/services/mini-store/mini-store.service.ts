import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PhraseSet } from "src/app/models/phrases.model";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class MiniStoreService {
  // default state can be initialized in the below way
  // private _emptyPhraseSet: PhraseSet = { name: "", phrases: [] };
  // All the phrases from the db
  private _allPhrases: BehaviorSubject<PhraseSet[]> = new BehaviorSubject<
    PhraseSet[]
  >(null);
  // Only the phraseSet that will be used in the game
  private _selectedPhraseSet$: BehaviorSubject<PhraseSet> = new BehaviorSubject<
    PhraseSet
  >(null);
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor() {}

  getAllPhrases() {
    return this._allPhrases.asObservable();
  }
  setNewPhrasesFromDB(phrases: PhraseSet[]) {
    this._allPhrases.next(phrases);
  }

  setPhraseSetToUse(phraseSet: PhraseSet) {
    this._selectedPhraseSet$.next(phraseSet);
  }
  getPhraseSetToUse() {
    return this._selectedPhraseSet$.asObservable();
  }

  setUserData(user: User) {
    this._user$.next(user);
  }
  getUserData() {
    return this._user$.asObservable();
  }
}
