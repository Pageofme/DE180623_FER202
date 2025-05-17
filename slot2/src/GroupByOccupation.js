
function GroupByOccupation(people) {
  return people.reduce((groups, person) => {
    const occupation = person.occupation;
    if (!groups[occupation]) {
      groups[occupation] = [];
    }
    groups[occupation].push(person);
    return groups;
  }, {});
}

export default GroupByOccupation;