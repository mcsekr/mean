import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.css']
})
export class VotingItemComponent {

  @Input("value")
  itemName = "Unknown"

  @Output()
  vote = new EventEmitter<object>()

  handleLike(event: MouseEvent) {
    this.vote.emit({ type: "like", item: this.itemName })
  }
  handleDislike(event: MouseEvent) {
    this.vote.emit({ type: "dislike", item: this.itemName })
  }



}
