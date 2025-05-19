function RenderEmployee(){
    const employee = { name: "John Doe", age: 30, department: "IT" };
   return (
    <div>
        <h1>Exercise 1</h1>
        <h1>Name: {employee.name}</h1>
        <p>Age: {employee.age} - Department: {employee.department}</p>
    </div>
   )

}
export default RenderEmployee;