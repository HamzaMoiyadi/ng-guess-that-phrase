import { Component, OnInit } from "@angular/core";

@Component({
  selector: "game-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {

  buttonLinks = [
    {link: 'main-game', view_name: "Start Game" },
    {link: 'phrase-set-maker', view_name: "Make your own Phrase Set" },
    {link: 'phrase-setter', view_name: "Set phrase for your game"}
  ]

  constructor() {}

  ngOnInit(): void {}
}
