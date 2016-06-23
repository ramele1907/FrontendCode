/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emyly',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    },
];
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
};

function showList() {
    var myTable = '<table class="table table-inverse" border="1"><tr><th>First Name</th><th>Last Name</th>'+
        '<th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>' +employeesList[i].firstName+'</td><td>'
            +employeesList[i].lastName+'</td><td>'+employeesList[i].phone+
            '</td><td>'+employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}
function totalSalary() {
    var sum = 0;
    for(var i in employeesList) {
        sum += employeesList[i].salary;
    }
    var totalSum1 = document.getElementById('totalSum');
    totalSum1.innerHTML = sum;
}
function delLast() {
    employeesList.pop();
    showList();
}




























