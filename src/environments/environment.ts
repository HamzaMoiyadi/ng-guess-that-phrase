// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase_config: {
    apiKey: "AIzaSyBc3qVoLAXp4iFnn2CPvvPPSIu9L52NBIw",
    authDomain: "js-games-ggwp.firebaseapp.com",
    databaseURL: "https://js-games-ggwp.firebaseio.com",
    projectId: "js-games-ggwp",
    storageBucket: "js-games-ggwp.appspot.com",
    messagingSenderId: "448601539151",
    appId: "1:448601539151:web:2130beaaf2ceb426a3e03a"
  },

  firestore_collection_name: "phraseSets"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
