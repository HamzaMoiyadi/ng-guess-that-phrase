import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { CommonService } from "src/app/services/common.service";
import { VirtualTimeScheduler, Subscription } from "rxjs";

@Component({
  selector: "game-letter-window",
  templateUrl: "./letter-window.component.html",
  styleUrls: ["./letter-window.component.scss"]
})
export class LetterWindowComponent implements OnInit, OnDestroy {
  @Input("initObj") set objSet(inputObj: object) {
    this.obj = { ...this.obj, ...inputObj };
  }

  obj: object = {
    letter: "",
    index: 0,
    visible: false
  };

  characterToShowSub$: Subscription;

  visible: boolean = false;

  constructor(public _common: CommonService) {}

  ngOnInit() {
    // this._common.isSpace(this.obj["letter"])
    this.characterToShowSub$ = this._common
      .getWhichCharacterToShow()
      .subscribe((characterToShow: string) => {
        console.log("called get which character and got ", characterToShow);

        try {
          if (characterToShow === "") {
            throw new Error("Character is null");
          }
          if (characterToShow === this.obj["letter"]) {
            console.log("nigga we got it");

            this.obj["visible"] = true;
          }
        } catch (err) {
          // console.log(err);
        }
      });
  }

  toggleVisibility(): void {
    this.obj["visible"] = !this.obj["visible"];
    // this.visible = !this.visible;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    // Unsubscribe from subscriptions to clean up memory 
    this.characterToShowSub$.unsubscribe();

    // set global variables back to their initial value for smooth data transitions
    this.obj = {
      letter: "",
      index: 0,
      visible: false
    };
  }
}
