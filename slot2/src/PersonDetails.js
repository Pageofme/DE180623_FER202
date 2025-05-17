import people from "./People";
import sortByOccupationThenAge from "./sortByOccupationThenAge";

function PersonDetails() {
  const sortPeople = sortByOccupationThenAge(people);
  return (
    <div>
      {sortPeople.map((person) => (
        <details key={person.id}>
          <summary>{person.name}</summary>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
        </details>
      ))}
     
    </div>
  );
}
export default PersonDetails;

// function PersonDetails({ person }) {
//     return (
//         <div>
//             <h3>{person.name}</h3>
//             <p>Age: {person.age}</p>
//             <p>Occupation: {person.occupation}</p>
//         </div>
//     );
    
// }
// export default PersonDetails;