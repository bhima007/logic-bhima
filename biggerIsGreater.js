/*
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list. [Kuya]

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
Example:
- abcd

The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/


function biggerIsGreater(w) {
    let arr = w.split('');
    
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i === -1) return 'no answer';

    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];

    let suffix = arr.slice(i + 1).reverse();
    let result = arr.slice(0, i + 1).concat(suffix).join('');

    return result;
}

console.log(biggerIsGreater("abcd"));