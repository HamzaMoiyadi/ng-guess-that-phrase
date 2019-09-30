import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  PhraseSet,
  Phrase,
  FirestorePhraseSet
} from "src/app/models/phrases.model";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class FirestoreService {
  COLLECTION_NAME: string = environment.firestore_collection_name;

  constructor(private _firestore: AngularFirestore) {}

  addPhraseSet(phraseSet: Partial<FirestorePhraseSet>) {
    return this._firestore.collection(this.COLLECTION_NAME).add(phraseSet);
  }

  getAllPhrasesFromDB(): Promise<PhraseSet[] | boolean> {
    // Make temporary empty array which will be returned after the data has been added to it as per <T>
    let tempPhraseSetArr: PhraseSet[] = [];
    // get reference to collection so as to prevent long-ass lines of code
    let collectionRef = this._firestore.collection(this.COLLECTION_NAME).ref;
    // We're returning a promise coz it is easiest, and we will not be using streaming data anyway. i.e. This ain't realtime for me coz I don't need it
    return new Promise((resolve, reject) => {
      try {
        collectionRef
          .get() //get all documents
          .then(querySnapshot => {
            // for each document, fill an object of type <T> with the appropriate values
            querySnapshot.forEach(doc => {
              let tempPhraseSet: PhraseSet = { id: "", name: "", phrases: [] };

              let tempPhraseArray: Phrase[] = [];
              tempPhraseSet["id"] = doc["id"]; // id is not a part of the actual data object on firebase, it's the key to the actual data
              let data = doc.data();
              console.log("data from firebase is ", data);

              tempPhraseSet["name"] = data["name"];
              let numberOfPhrases = data["phrases"].length;
              for (let i = 0; i < numberOfPhrases; i++) {
                tempPhraseArray.push({
                  phrase: data["phrases"][i],
                  hint: data["hints"][i]
                });
              }
              tempPhraseArray = this._shuffleArray(tempPhraseArray);
              tempPhraseSet["phrases"] = [
                ...tempPhraseSet["phrases"],
                ...tempPhraseArray
              ];

              tempPhraseSetArr.push(tempPhraseSet);
            });
            // we resolve with the readied data
            resolve(tempPhraseSetArr);
          })
          .catch(err => {
            throw new Error(err);
          });
      } catch (err) {
        console.log(err);
        reject(false);
      }
    });
  }
  private _shuffleArray(array: Phrase[]): Phrase[] {
    let tempPhraseArray: Phrase[] = array;
    let inputArrayLength: number = tempPhraseArray.length;
    let index: number = 0;
    let temp: Phrase = null;
    while (inputArrayLength > 0) {
      index = Math.floor(Math.random() * inputArrayLength);
      inputArrayLength--;
      temp = tempPhraseArray[inputArrayLength];
      tempPhraseArray[inputArrayLength] = tempPhraseArray[index];
      tempPhraseArray[index] = temp;
    }

    return tempPhraseArray;
  }
}
