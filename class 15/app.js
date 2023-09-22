
var a = +prompt("Enter num 1")
var b = +prompt("Enter num 2")
var add = a + b
var sub = a - b
var mul = a * b
var div = a / b


// Calculation Table
document.write(
    "<table border = '1px groove black'>"+

    "<tr>"+
    "<th>"+
    "Addition"
    +"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+add+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+
    "Subtraction"
    +"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+sub+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+
    "Multiplication"
    +"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+mul+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+
    "Division"
    +"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+div+"</td>"
    +"</tr>"

    +"</table>"
)