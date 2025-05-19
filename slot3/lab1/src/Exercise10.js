import React, { useState } from "react";
import employees from "./Employees";

function EmployeeSearch() {
  

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc nhân viên theo tên, không phân biệt hoa thường
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h1>Exercise 10</h1>
      <h2>Search Employees by Name</h2>
      <input
        type="text"
        placeholder="Enter name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.department} - Age: {employee.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeSearch;
