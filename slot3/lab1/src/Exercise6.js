import employees from "./Employees";
function ITDepartmentEmployees() {
  // Lọc nhân viên phòng IT
  const itEmployees = employees.filter(
    (employee) => employee.department === "IT"
  );

  return (
    <div>
      <h1>Exercise 6</h1>
      <h2>IT Department Employees</h2>
      <ul>
        {itEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - Age: {employee.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ITDepartmentEmployees;
