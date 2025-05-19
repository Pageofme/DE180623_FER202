import employees from "./Employees";
const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const sum = ages.reduce((total, age) => total + age, 0);
  return sum / ages.length;
};

function AverageAgeComponent() {
   const ages = employees.map(employee => employee.age);

  return (
    <div>
      <h1>Exercise 4</h1>
      <p>The average age is: {averageAge(...ages)}</p>
    </div>
  );
}

export default AverageAgeComponent;