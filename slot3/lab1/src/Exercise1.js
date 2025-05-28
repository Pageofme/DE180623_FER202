function RenderEmployee(){
    const employee = { name: "John Doe", age: 30, department: "IT" };
    const {name, age, department} =employee;
   return (
    <div>
        
        <h1>Exercise 1</h1>
        <h1>Name: {name}</h1>
        <p>Age: {age} - Department: {department}</p>  
    </div>
   )

}
export default RenderEmployee;