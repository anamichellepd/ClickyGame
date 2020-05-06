import React from "react";
import "./style.css";
import friends from "../../friends.json";
import shuffle from "shuffle-array";

function FriendCard(props) {
  const shuffleArray = (friend) => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      console.log(friends[j].name);
    }
  };
  const selectCard = () => <card {...true} />;
  const cardClicked = () => {
    shuffleArray, selectCard;
  };
  return (
    <div className="card" onClick={() => cardclicked()}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
