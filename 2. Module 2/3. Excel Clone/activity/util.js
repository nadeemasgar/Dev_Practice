function solveFormula(formula) {
    //( A1 + A2 )
    let formulaComps = formula.split(" ");
    // ["(", "A1", "+", "A2", ")"];

    for(let i = 0; i < formulaComps.length; i++) {
        let formComp = formulaComps[i];
        if(formComp[0] >= "A" && formComp[0] <= "Z") {
            // valid formula component
            let {rowId, colId} = getRowIdColIdFromAddress(formComp);
            let cellObject = db[rowId][colId];
            let value = cellObject.value;
            formula = formula.replace(formComp, value);

        }
    }

    let computedValue = eval(formula);
    return computedValue;
}

function getRowIdColIdFromElement(element) {
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colId");

    return {
        rowId, colId
    }
}

function getRowIdColIdFromAddress(address) {
    let rowId = Number(address.substring(1)) - 1;
    let colId = address.charCodeAt(0) - 65;

    return {
        rowId, colId
    }
}