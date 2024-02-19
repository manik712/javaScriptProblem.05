const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function foundVowels(sentence) {
  let counts = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      counts += 1;
    }
  });
  return counts;
}

console.log(foundVowels("I hate your friend"));
