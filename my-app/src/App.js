import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    friends,
  };

  // Setting this.state.friends to the friends json array

  removeFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  shuffleArray = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
      this.setState({ friends });
    }
    return friends;
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Counter></Counter>
        {friends.map((friend) => (
          <FriendCard
            id={friend.id}
            image={friend.image}
            clicked={friend.clicked}
            onClick={() => console.log("HEEEELLLOOOOO")}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
