// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const empArray = [];
let average = 0;
// Collect employee data
const collectEmployees = function() {
  const employee = {
    firstName: "",
    lastName: "",
    salary: 0
  };

  employee.firstName = window.prompt(`what is your first name?`);
  employee.lastName = window.prompt(`what is your last name?`);
  employee.salary = window.prompt(`what is your salary?`);
  
  empArray.push(employee);

  return empArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  average = 0;
  for (let i=0; i<employeesArray.length; i++) {
    sum += parseInt(employeesArray[i].salary);
  }
  average = sum/employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${average}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`)

}

// Ask if they want to add more
addMore = function () {
  let again = window.confirm(`Do you want to add more information?`);
  while (again) {
    collectEmployees();
    again = window.confirm(`Do you want to add more information?`);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  addMore();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
