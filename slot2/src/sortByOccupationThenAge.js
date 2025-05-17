
function sortByOccupationThenAge(arr) {
  return arr.slice().sort((a, b) => {
    // So sánh occupation theo alphabet
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    // Nếu occupation bằng nhau thì so sánh age
    return a.age - b.age;
  });
}

export default sortByOccupationThenAge;