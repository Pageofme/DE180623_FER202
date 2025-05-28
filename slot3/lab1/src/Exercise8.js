import employees from "./Employees";

function GroupEmployeesByDepartment() {
  
  // Nhóm nhân viên theo department
  const grouped = employees.reduce((groups, employee) => {
    const dept = employee.department;
    if (!groups[dept]) {
      groups[dept] = [];
    }
    groups[dept].push(employee);
    return groups;
  }, {});

  return (
    <div>
        <h1>Exercise 8</h1>
      <h2>Employees Grouped by Department</h2>
      {Object.entries(grouped).map(([department, emps]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {emps.map(emp => (
              <li key={emp.department}>
                {emp.name} - Age: {emp.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupEmployeesByDepartment;
