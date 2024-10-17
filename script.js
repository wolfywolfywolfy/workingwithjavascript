
//this is my function to check if number entered is even
function isEven(num) {
    return(num % 2 == 0);
}

document.getElementById("myButton").onclick = function() {
    //set quantity of rows to be whatever inputed into txtNumber
    let rowNum = document.getElementById("txtNumber").value;
    //create a table object for rows and data.
    const myTable = document.createElement("table");

    for(let i = 0; i <= rowNum; i++) {
        //create row element to put in table
        let tableRow = document.createElement("tr");

        //create table data to go into the rows
        let tableData1 = document.createElement("td");
        let tableData2 = document.createElement("td");

        //table data takes in "4". 
        tableData1.textContent = i;
        //append data into the row
        tableRow.appendChild(tableData1);

        //if the number is even, set it as even, else odd.
        tableData2.textContent = isEven(i) ? "Even": "Odd";

        //put table data 2 into row
        tableRow.appendChild(tableData2);
        //put table row into table
        myTable.appendChild(tableRow);
    }

    document.getElementById("results").appendChild(myTable);
    

}
