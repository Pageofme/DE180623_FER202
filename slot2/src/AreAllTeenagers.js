import people from "./People";

function AreAllTeenagers() {
   const check = people.every(person => person.age >= 13 && person.age <= 19);

    return (
        <div>
            {check ? (
                <div> Everyone is a teenager</div>
            ) : (
                <div>Not everyone is a teenager</div>
            ) }
        </div>
    )

}

export default AreAllTeenagers;