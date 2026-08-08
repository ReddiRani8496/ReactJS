function checkVotingEligibility(age) {
  // implement your solution here
  if (age < 18) {
    return "Not eligible to vote";
  } else {
    return "Eligible to vote";
  }
}

module.exports = { checkVotingEligibility };
