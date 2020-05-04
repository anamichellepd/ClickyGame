import React, { Component } from "react";
import Topbar from "./components/Topbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  };

  shuffleFriends = (friends) => {
    let i =friends.length -;
    for(;i>0;i--){
      const j = MAth.floor (Math.random()*(i+1));
      const temp = friends[i];
      friends[i] = friends [j];
      friends[j]= temp;
    }
    return friends
  };

  removeFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container fluid>
        <Topbar fluid></Topbar>
        <Wrapper>
          {this.state.friends.map((friend) => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
