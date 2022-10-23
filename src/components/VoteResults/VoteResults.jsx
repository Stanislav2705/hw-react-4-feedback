import React from "react";
import PropTypes from 'prop-types'
import { ListResult, ItemResult, Text, Container } from "./VoteResults.styled";


export default function VoteResults({good,neutral,bad,total,goodPercent}) {
  return (
    <div>
      <Container>
          <ListResult>
          <ItemResult>
            <Text>Good: {good}</Text> </ItemResult>
          <ItemResult>
            <Text>Neutral: {neutral}</Text></ItemResult>
          <ItemResult>
            <Text>Bad: {bad}</Text></ItemResult>
          </ListResult>
        </Container>
        <Container>
          <ListResult>
          <ItemResult>
            <Text>Total: {total}</Text></ItemResult>
          <ItemResult>
            <Text>Positive feedback: {goodPercent}%</Text></ItemResult>
          </ListResult>
        </Container>
    </div>
  )
}

VoteResults.propTypes = {
  good: PropTypes.number.isRequired,
  isRequired: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercent:  PropTypes.number.isRequired
}

