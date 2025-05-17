import people from "./People";
function NamePerson() {
   return (
        <div>
            <ul>
                {people.map(person => (
                    <li key={person.id}> {person.name}</li>
                )
                )}
            </ul>
        </div>

   );
}
export default NamePerson;

