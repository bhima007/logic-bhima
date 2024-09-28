// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequencyCounter1[char]) {
      return false;
    } else {
      frequencyCounter1[char] -= 1;
    }
  }

  return true;
}

module.exports = validAnagram;

console.log(validAnagram("cinema", "iceman"));
