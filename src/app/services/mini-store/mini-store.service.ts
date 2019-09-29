import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Phrases, PhraseSet } from "src/app/models/phrases.model";

@Injectable({
  providedIn: "root"
})
export class MiniStoreService {
  // default state can be initialized in the below way
  // private _emptyPhraseSet: PhraseSet = { name: "", phrases: [] };
  // All the phrases from the db
  private _phraseStore$: BehaviorSubject<PhraseSet[]> = new BehaviorSubject<
    PhraseSet[]
  >(null);
  // Only the phraseSet that will be used in the game
  private _selectedPhraseSet$: BehaviorSubject<PhraseSet> = new BehaviorSubject<
    PhraseSet
  >(null);
  constructor() {}

  getAllPhrases() {
    return this._phraseStore$.asObservable();
  }
  setNewPhrasesFromDB(phrases: PhraseSet[]) {
    this._phraseStore$.next(phrases);
  }

  setPhraseSetToUse(phraseSet: PhraseSet) {
    this._selectedPhraseSet$.next(phraseSet);
  }
  getPhraseSetToUse() {
    return this._selectedPhraseSet$.asObservable();
  }
}
