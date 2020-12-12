var convert = function(s, numRows) {
    let row = 1;
    let index = 0
    let rowsObject = {}

    if (numRows === 1) {
        return s
    }

    for (i = 1; i <= numRows; i++) {
        rowsObject[i] = ""
    }

    while (index < s.length) {
        while (row < numRows + 1) {
            rowsObject[row] = rowsObject[row] + (s[index])
            row++
            index++
            if (index === s.length) {
                return newString()
            }
        }

        row = row - 2

        while (row > 0) {
            rowsObject[row] = rowsObject[row] + (s[index])
            row--
            index++
            if (index === s.length) {
                return newString()
            }
        }

        row = row + 2
    }

    function newString() {
        let string = ""

        for (i = 0; i < Object.keys(rowsObject).length; i++) {
            let key = (i + 1).toString()
            string = string + rowsObject[key]
        }
        return string
    }
};

console.log(convert("a", 1))