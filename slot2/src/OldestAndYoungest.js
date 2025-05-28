import people from "./People";

function OldestAndYoungest() {
  if (people.length === 0) {
    return <div>No people data available.</div>;
  }

  // Tìm người lớn tuổi nhất
  const oldestPerson = people.reduce((oldest, person) => {
    return person.age > oldest.age ? person : oldest;
  }, people[0]);

  // Tìm người trẻ tuổi nhất
  const youngestPerson = people.reduce((youngest, person) => {
    return person.age < youngest.age ? person : youngest;
  }, people[0]);

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      <div>
        <h3>Oldest Person</h3>
        <p>Name: {oldestPerson.name}</p>
        <p>Age: {oldestPerson.age}</p>
        <p>Occupation: {oldestPerson.occupation}</p>
      </div>
      <div>
        <h3>Youngest Person</h3>
        <p>Name: {youngestPerson.name}</p>
        <p>Age: {youngestPerson.age}</p>
        <p>Occupation: {youngestPerson.occupation}</p>
      </div>
    </div>
  );
}
export default OldestAndYoungest;