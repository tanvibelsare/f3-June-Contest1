
let Name=document.getElementById("entername");
let profession=document.getElementById("enteprofession");
let age=document.getElementById("enterage");
let addUserButton=document.getElementById("adduserbtn");
let massage=document.getElementById("msg")
let employeeDetail=[]

addUserButton.addEventListener("click",(e)=>{
    e.preventDefault();
    //checking the input field
    if((Name.value=="")||(profession.value=="")||(age.value=="")){
        massage.style.color="red"
        massage.innerText="Error:Please Make sure all the fields are filled before adding in an employee"
    }else{
        massage.style.color="green"
        massage.innerText="Success:Employee Added";
        //id of the employee
        id=employeeDetail.length+1;
        //add object in array
        employeeDetail.push({ Id:id,employeename:Name.value,employeeprofession:profession.value,employeeage:age.value})
        console.log(employeeDetail)
        //calling the function to add employee
        employeeList();
        //after every addition clear the input fields
        Name.value="";
        profession.value="";
        age.value="";
    }
})
//to add the employee in list
function employeeList(){
    let employeeList=document.getElementById("employeeList");
    employeeList.innerHTML="";
    //itrating over array of object
    employeeDetail.forEach((employee)=>{
        //creat div for each employee
        let maindiv=document.createElement("div")
        maindiv.setAttribute("class","maindiv")
        let EmployeeDiv=document.createElement("div");
        EmployeeDiv.style.border="1px solid #ffffff"
        EmployeeDiv.setAttribute("class","employee")
        EmployeeDiv.innerHTML=`${employee.Id}&nbsp &nbsp  Name:${employee.employeename}  &nbsp &nbsp Profession:${employee.employeeprofession} &nbsp &nbsp Age:${employee.employeeage}`
        //creat delete button
        let deletebtn=document.createElement("button");
        deletebtn.innerText="Delete User"
        deletebtn.setAttribute("class","deletebtn")
        deletebtn.addEventListener("click",()=>{
            deleteEmployee(employee.Id);
            maindiv.remove()
        })
        maindiv.appendChild(EmployeeDiv)
        maindiv.appendChild(deletebtn)
        //appending employee in list
        employeeList.appendChild(maindiv)

    })
}
//deleting employee from list
function deleteEmployee(id){
    employees=employeeDetail.filter((employee)=>employee.Id!==id)
}