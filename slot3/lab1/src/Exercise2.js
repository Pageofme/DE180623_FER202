import employees from "./Employees";
function EmployeeList() {
 
  return (
    <div>
        <h1>Exercise 2</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.department} - Age: {employee.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EmployeeList;
