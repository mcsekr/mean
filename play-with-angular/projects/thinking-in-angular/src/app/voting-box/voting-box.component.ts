import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent {

  votingItems = [
    "Mongo",
    "Express",
    "Angular",
    "Node"
  ]

  votingLines = [
    { item: "Mongo", likes: 1, dislikes: 2 },
    { item: "Express", likes: 2, dislikes: 3 },
    { item: "Angular", likes: 3, dislikes: 4 },
    { item: "Node", likes: 4, dislikes: 5 }
  ]


}
