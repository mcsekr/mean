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

  votingLines: Array<any> = []

  handleVote(event: any) {
    let { type, item } = event;
    let votingLine = this.votingLines.find(line => line.item === item);
    if (votingLine) {
      if (type === "like") {
        votingLine.likes++;
      }
      if (type === "dislike") {
        votingLine.dislikes++;
      }
    } else {
      if (type === "like") {
        this.votingLines.push({
          item: item,
          likes: 1,
          dislikes: 0
        })
      }
      if (type === "dislike") {
        this.votingLines.push({
          item: item,
          likes: 0,
          dislikes: 1
        })
      }
    }

  }


}
