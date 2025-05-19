import employees from "./Employees";
function CheckTeenagers() {
 
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
        <h1>Exercise 9</h1>
      <h2>Check if any employee is a teenager</h2>
      <p>{isTeenager ? "True" : "False"}</p>
    </div>
  );
}

export default CheckTeenagers;
