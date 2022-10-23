import React from "react";
import { ListButton, ItemButton,Button } from "./VoteActions.styled";


export default function VoteActions({leaveVote}) {
  return (
    <ListButton>
      <ItemButton>
        <Button variant="contained" onClick={() => leaveVote("good")}>Good</Button>
      </ItemButton>
      <ItemButton>
        <Button onClick={() => leaveVote("neutral")}>Neutral</Button>
      </ItemButton>
      <ItemButton>
        <Button onClick={() => leaveVote("bad")}>Bad</Button>
      </ItemButton>
    </ListButton>
  )
}
