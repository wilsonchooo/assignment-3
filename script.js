    // Declare global variables
    let numRows = 0;
    let numCols = 0;
    let colorSelected; 

    // Add a row
    function addR() {
        alert("Clicked Add Row"); // Replace this line with your code.
        numRows += 1;
        if (numCols == 0){
            numCols = 1;
        }
        let tableID = document.getElementById("grid");
        let newRow = tableID.insertRow(0);
        newRow.id = 'row';
        for (let i = 0; i < numCols; i++){
            let newCell = newRow.insertCell(0);
        }
        
    }

    // Add a column
    function addC() {
        alert("Clicked Add Col"); // Replace this line with your code.
        numCols += 1;
        if (numRows == 0){
            addR()
        }
        else{
            const rows = document.querySelectorAll('tr');
            console.log(rows);
            for (let i = 0; i < rows.length; i++){
                let newCell = rows[i].appendChild(document.createElement('td'));
            }
        }
       
        
    }

    // Remove a row
    function removeR() {
        alert("Clicked Remove Row"); // Replace this line with your code.
        if (numRows>0){
            numRows -= 1;
            let tableID = document.getElementById("grid");
            tableID.deleteRow(0);
            if(numRows==0){
                numCols=0;
                numRows=0;
            }
        }
    }

    // Remove a column
    function removeC() {
        alert("Clicked Remove Col"); // Replace this line with your code.
        if (numCols>0){
            numCols -= 1;
        const rows = document.querySelectorAll('tr');
        console.log(rows);
        for (let i = 0; i < rows.length; i++){
            let newCell = rows[i].removeChild(rows[i].lastElementChild);
        }
        if (numCols==0){
            numRows=0
            numCols=0
            for (let k =0;k<rows.length;k++){
                rows[k].remove()
            }
        }
        } 
    }

    // Set global variable for selected color
    function selectColor(){
        colorSelected = document.getElementById("selectedColorId").value;
        console.log(colorSelected);
    }

    // Fill all uncolored cells
    function fillU(){
        alert("Clicked Fill All Uncolored"); // Replace this line with your code.
    }

    // Fill all cells
    function fillAll(){
        alert("Clicked Fill All"); // Replace this line with your code.
    }

    // Clear all cells
    function clearAll(){
        alert("Clicked Clear All"); // Replace this line with your code.
    }