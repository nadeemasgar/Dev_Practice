let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener("scroll" , function(e){
    let top = e.target.scrollTop;
    let left = e.target.scrollLeft;

    topRow.style.top = top + "px";
    topLeftCell.style.top = top + "px";
    topLeftCell.style.left = left + "px";
    leftCol.style.left = left + "px";  
})

for(let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function(e) {
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid")); 
        let cellObject = db[rowId][colId];
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        
        addressInput.value = address;
        formulaInput.value = cellObject.formula;
    });
 
    allCells[i].addEventListener("blur", function(e) {
        lastSelectedCell = e.target;
        // console.log(e);
        // console.log(lastSelectedCell);
        let cellValue = e.target.textContent; 
        let rowId = e.target.getAttribute("rowid");
        let colId = e.target.getAttribute("colid"); 
        console.log(cellValue);
        let cellObject = db[rowId][colId];
        //console.log(cellObject);
        
        if(cellObject.value == cellValue) {
            return;
        }
        //update the cellobject value
        cellObject.value = cellValue;

        //console.log(db);
    });
}

formulaInput.addEventListener("blur", function(e) {
    let formula = e.target.value;
    // console.log(formula);
    // console.log(lastSelectedCell);
    if(formula) {
        let {rowId, colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];  // Old Value in object
        let computedValue = solveFormula(formula); //Computed value

        //formula update
        cellObject.formula = formula;

        //db update
        cellObject.value = computedValue;

        //ui update
        //document.querySelector(`div[rowid=""][colid=""]`).textContent = computedValue;
        lastSelectedCell.textContent = computedValue;
    }
}) 