import people from "./People";
import GroupByOccupation from "./GroupByOccupation";

function PeopleListOfOccupation() {
  const groupPeople = GroupByOccupation(people);

  return (
    <div>
     
      {Object.entries(groupPeople).map(([occupation, persons]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {persons.map(person => (
              <li key={person.id}>{person.name} - Age: {person.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PeopleListOfOccupation;
