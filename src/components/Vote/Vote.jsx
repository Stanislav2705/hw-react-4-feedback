import Block from "components/Block/Block";
import VoteResults from "components/VoteResults/VoteResults";
import VoteActions from "components/VoteActions/VoteActions";
import { Error } from "./Vote.styled";
import { useState } from "react";


export default function Vote() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  }

  const countPercentage = () => {
    const total = countTotal();
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(1))

  }

  const leaveVote = (propertyName) => {
    switch (propertyName) {
      case "good":
        return setGood((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
      default:
        return;
    }
  }

  const total = countTotal();

  const goodPercent = countPercentage();

  return (
    <div>
        <Block title="Please leave feedback">
          <VoteActions leaveVote={leaveVote} />
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


