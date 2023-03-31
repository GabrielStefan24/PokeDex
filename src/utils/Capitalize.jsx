export default function capitalizeFirstLetter(word) {
  if (word.length === 0) {
    return word;
  } else {
    return word[0].toUpperCase() + word.slice(1);
  }
}
