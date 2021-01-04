const answer = function (question) {
  var result = "";
  const matcher = /what%20is%20([0-9]*)%20plus%20([0-9]*)/;
  const match = question.match(matcher)

  if (match)
    result = parseInt(match[1]) + parseInt(match[2]);

  return result.toString()
};

module.exports = answer
