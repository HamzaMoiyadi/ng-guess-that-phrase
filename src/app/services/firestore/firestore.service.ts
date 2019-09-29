import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { PhraseSet } from "src/app/models/phrases.model";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class FirestoreService {
  COLLECTION_NAME: string = environment.firestore_collection_name;

  constructor(private _firestore: AngularFirestore) {}

  addPhraseSet(phraseSet: PhraseSet) {
    return this._firestore.collection(this.COLLECTION_NAME).add(phraseSet);
  }

  getAllPhrases() {
    return this._firestore.collection(this.COLLECTION_NAME).valueChanges();
  }
}
