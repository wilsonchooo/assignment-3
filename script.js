    // Declare global variables
    let numRows = 0;
    let numCols = 0;
    let colorSelected; 

    // Add a row
    function addR() {
        numRows += 1;
        if (numCols == 0){
            numCols = 1;
        }
        let tableID = document.getElementById("grid");
        let newRow = tableID.insertRow(0);
        newRow.id = 'row';
        for (let i = 0; i < numCols; i++){
            let newCell = newRow.insertCell(0);
            newCell.onclick=function(){
                this.style.backgroundColor = colorSelected;
            }
        }
        
    }

    // Add a column
    function addC() {
        numCols += 1;
        if (numRows == 0){
            addR()
        }
        else{
            const rows = document.querySelectorAll('tr');
            console.log(rows);
            for (let i = 0; i < rows.length; i++){
                let newCell = rows[i].appendChild(document.createElement('td'));
                newCell.onclick=function(){
                    this.style.backgroundColor = colorSelected;
                }
            }
        }
       
        
    }

    // Remove a row
    function removeR() {
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
        const cells = document.querySelectorAll('td');
        cells.forEach(function(cell){
            if(cell.style.backgroundColor == "white"){
                cell.style.backgroundColor=colorSelected
            }
        })
    }

    // Fill all cells
    function fillAll(){
        alert("Clicked Fill All"); // Replace this line with your code.
        const cells = document.querySelectorAll('td');
        cells.forEach(function(cell){
            cell.style.backgroundColor=colorSelected
        })
    }

    // Clear all cells
    function clearAll(){
        alert("Clicked Clear All"); // Replace this line with your code.
        const cells = document.querySelectorAll('td');
        cells.forEach(function(cell){
            cell.style.backgroundColor="white"
        })
    }
