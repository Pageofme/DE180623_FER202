import employees from "./Employees";
function EmployeeTable() {

  return (
    <div>
    <h1>Exercise 3</h1>
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id || index}>
            <td>{employee.id || index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default EmployeeTable;
