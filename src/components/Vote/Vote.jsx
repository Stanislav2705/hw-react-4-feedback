import { Component } from "react";
import Block from "components/Block/Block";
import VoteResults from "components/VoteResults/VoteResults";
import VoteActions from "components/VoteActions/VoteActions";
import { Error } from "./Vote.styled";



export default class Vote extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPercentage() {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const voteGood = this.state.good
    const result = (voteGood / total) * 100;
    return Number(result.toFixed(1))

  }

  leaveVote = (propertyName) => {
    this.setState((prevState) => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotal();
    const goodPercent = this.countPercentage()
    return (
      <div>
        <Block title="Please leave feedback">
          <VoteActions leaveVote={this.leaveVote} />
        </Block>
        <Block title="Statistics">
          {!total ? <Error>No feedback given</Error> :
          <VoteResults
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            goodPercent={goodPercent}
          />}
        </Block>
      </div>
    )
  }
}
