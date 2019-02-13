import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import celebs from "./celebs.json";
import logo from "./images/deathmatch.jpg";
import victory from "./images/celeb.jpg";
import gameOver from "./images/gameover.jpg";
import "./App.css";

class App extends React.Component {
  state = {
    celebs,
    score: 0,
    highscore: 0,
    logo: logo
  };

  handleGuess = (guess, id) => {
    if (guess === true) {
      this.setState({ logo: gameOver });
    } else if (guess === "false") {
      celebs[id - 1].guessed = true;

      if (
        this.state.score === this.state.highscore &&
        this.state.score === 11
      ) {
        this.setState({
          celebs,
          score: this.state.score + 1,
          highscore: this.state.highscore + 1,
          logo: victory
        });
      } else if (this.state.score === 11 && this.state.highscore === 12) {
        this.setState({ celebs, score: this.state.score + 1, logo: victory });
      } else if (this.state.score === this.state.highscore) {
        this.setState({
          celebs,
          score: this.state.score + 1,
          highscore: this.state.highscore + 1
        });
      } else {
        this.setState({ celebs, score: this.state.score + 1 });
      }
    }
  };

  restartGame = () => {
    this.state.celebs.map(i => (i.guessed = "false"));
    this.setState({ celebs, score: 0, logo: logo });
  };

  //shuffle celebs
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          restartGame={this.restartGame}
          logo={this.state.logo}
        />

        {this.shuffle(
          this.state.celebs.map(i => (
            <Card
              handleGuess={this.handleGuess}
              restartGame={this.restartGame}
              guessed={i.guessed}
              id={i.id}
              key={i.id}
              name={i.name}
              image={i.image}
            />
          ))
        )}
      </Wrapper>
    );
  }
}

export default App;
