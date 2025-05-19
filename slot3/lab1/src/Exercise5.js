import employees from "./Employees";
function DropdownMenu(){
    return(
        <div>
            <h1>Exercise 5</h1>
            <select>
                {employees.map(employee=> (
                    <option>{employee.name}</option>
                ))}
            </select>
        </div>
    )
}
export default DropdownMenu;