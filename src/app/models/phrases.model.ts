export interface PhraseSet {
  id: string;
  name: string;
  phrases: Phrase[];
}

export interface Phrase {
  phrase: string;
  hint: string;
}

export interface FirestorePhraseSet {
  name: string;
  phrases: string[];
  hints: string[];
}
