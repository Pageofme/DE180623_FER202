
import people from "./People";
function PeopleList() {
  
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) =>
         <li key={person.occupation}>{person.name}</li>
        )}
        </ul>
    </div>
  )
}
export default PeopleList;
