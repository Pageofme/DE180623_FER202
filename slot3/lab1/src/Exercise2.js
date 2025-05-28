import employees from "./Employees";
// import "./test.module.css"
function EmployeeList() {
  return (
    <div>
      <h1>Exercise 2</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={employee.id || index}>
            {index + 1}-{employee.name} - {employee.department} - Age:{" "}
            {employee.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EmployeeList;
