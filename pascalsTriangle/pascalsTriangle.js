/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // First and last are always 1
    // interior cells are always (index of cell - 1) in previous row + (indexof cell) in previous row
    // ex: row3 cell 2 = row2 cell 1 + row2 cell 2
    var rows = [];
    while (rows.length < numRows) {
        var row = [];
        for (var rowIndex = 0; rowIndex < rows.length + 1; rowIndex++) {
            if (rowIndex === 0 || rowIndex === rows.length) {
                row.push(1);
            } else {
                row.push(rows[rows.length - 1][rowIndex - 1] + rows[rows.length - 1][rowIndex]);
            }
        }
        rows.push(row);
    }
    return rows;
};