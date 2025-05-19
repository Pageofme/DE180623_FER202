// import employees from "./Employees";

// function SortByDepartmentThenName() {
//   const sortArray = employees.sort((a, b) => {
//     if (a.department > b.department) return 1;
//     if (a.department < b.department) return -1;
//     return a.name > b.name ? a : b;
//   });
//   return (
//     <div>
//       <h1>Exercise 7</h1>
//       <ul>
//         {sortArray.map((employee) => (
//           <li key={employee.department}>
//             {employee.department} - {employee.name} - Age: {employee.age}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default SortByDepartmentThenName;

import employees from "./Employees";
function SortByDepartmentThenName() {
  // Tạo bản sao mảng và sắp xếp
  const sortedEmployees = [...employees].sort((a, b) => {
    // So sánh department theo alphabet
    const depCompare = a.department.localeCompare(b.department);
    if (depCompare !== 0) {
      return depCompare;
    }
    // Nếu department giống nhau thì so sánh name
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h1> Exercise 7</h1>
      <h2>Sorted Employee List</h2>
      <ul>
        {sortedEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByDepartmentThenName;
