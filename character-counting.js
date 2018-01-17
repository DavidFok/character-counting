var countLetters = function letterCounting(input) {
  var result = {};

  for (var i = 0; i < input.length; ++i) {
    var letter = input[i];
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 0
      }
      result[letter] = result[letter] + 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
