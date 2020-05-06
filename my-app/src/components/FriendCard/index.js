import React from "react";
import "./style.css";
import friends from "../../friends.json";
import Counter from "../Counter";

class FriendCard extends Counter {
  //after the card is clicked, the array is shuffled.
  //Pending: making the cards shuffle since only the array shuffles.
  shuffleArray = (friend) => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
    }
  };
  //On click, marking the card as selected
  selectCard = () => <card {...true} />;

  //function that gathers all of the functions that happen onClick

  clickHandler = () => {
    this.handleIncrement();
    this.shuffleArray();
  };
  render(props) {
    return (
      <div className="card" onClick={this.clickHandler}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }
}

export default FriendCard;
