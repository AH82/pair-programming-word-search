const  diagonalizeMatrix = require('./diagonalizeMatrix');
const transpose = require('./transposeMatrix');


const wordSearch = (letters, word) => {

  // Error Handling : Validating input
  if (letters.length === 0) throw "Array must not be empty";
  letters.forEach(element => {
    if (!Array.isArray(element)) throw "Array is not 2D";
  });
    

  const findWord = function(array, word) {
    const joinString = array.map(ls => ls.join(''));
    for (let l of joinString) {
      if (l.includes(word)) return true;
      if (l.includes(word.split('').reverse().join(''))) return true;
    }
    return false;
  };

  return (
    findWord(letters, word)
        || findWord(transpose(letters), word)
        || findWord(diagonalizeMatrix(letters), word)
        || findWord(diagonalizeMatrix(letters.reverse()), word)
  );
};

module.exports = wordSearch;