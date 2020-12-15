var convert = function(s, numRows) {
    let stringArray = new Array(numRows).fill('')
    let index = 0
    let row = 1

    if (numRows === 1) {
        return s
    }

    while (index < s.length) {
        while (row < numRows + 1) {
            stringArray[row - 1] = stringArray[row - 1] + (s[index])
            row++
            index++
            if (index === s.length) {
                return stringArray.join("")
            }
        }

        row = row - 2

        while (row > 0) {
            stringArray[row - 1] = stringArray[row - 1] + (s[index])
            row--
            index++
            if (index === s.length) {
                return stringArray.join("")
            }
        }

        row = row + 2
    }
};

console.log(convert("PAYPALISHIRING", 1))