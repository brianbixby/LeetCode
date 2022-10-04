/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    const copy = JSON.parse(JSON.stringify(board));
    
    function nextCell(row, col) {
        if (row > 8 || col > 8) {
                copyToBoard();
                return;
        }

        while (row < 9 && col < 9 && board[row][col] !== ".") {
            if (col < 8) {
                col += 1;
            } else {
                col = 0;
                row +=1;
            }
        }
        return [row, col];
    }
    
    function prevCell(row, col) {
        if (row < 0 || col < 0) {
                copyToBoard();
                return;
        }
        while (board[row][col] !== "." && row >= 0 && col >= 0) {
            if (col > 0) {
                col -= 1;
            } else {
                col = 8;
                row -=1 ;
            }
        }
        return [row, col];
    }
    
    function _backtrack(curr) {
        let digit = copy[curr.row][curr.col] == "." ? 1 : copy[curr.row][curr.col] + 1;
        let valid = false;
        while(!valid && digit < 10) {
            copy[curr.row][curr.col] = digit;
            digit += 1;
            valid = validate(copy);
        }
        if (valid) {
            let rowCol;
            if (curr.row >=8 && curr.col >=8) {
                copyToBoard();
                return;
            }
            if (curr.col >= 8) {
                rowCol = nextCell(parseInt(curr.row + 1), 0);
            } else {
                rowCol = nextCell(parseInt(curr.row), parseInt(curr.col + 1));
            }
            if (rowCol[0] > 8 || rowCol[1] > 8) {
                copyToBoard();
                return;
            }
            _backtrack({row: rowCol[0], col: rowCol[1]});
        } else {
            copy[curr.row][curr.col] = ".";
            let rc;
            if (curr.col == 0) {
                rc = prevCell(curr.row - 1, 8);
            } else {
                rc = prevCell(curr.row, curr.col - 1);
            }
            if (rc[0] < 0 || rc[1] < 0) {
                copyToBoard();
                return;
            }
            
            _backtrack({row: rc[0], col: rc[1]});
        }
    }
    let rc = nextCell(0,0);
    _backtrack({row: rc[0], col: rc[1]});

    
    function validate(sudoku) {
        return checkRows(sudoku) && checkCols(sudoku) && checkBox(sudoku);
    }
    
    function checkRows(sudoku) {
        for (let i=0;i<9;i++) {
            const dict = {"1": 0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8": 0, "9": 0};
            for (let j=0;j<9;j++) {
                if (sudoku[i][j] != ".") {
                    if (dict[sudoku[i][j]]) {
                        return false;
                    } else {
                        dict[sudoku[i][j]] += 1;
                    }
                }
            }
        }
        return true;
    }
    
    function checkCols(sudoku) {
        for (let i=0;i<9;i++) {
            const dict = {"1": 0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8": 0, "9": 0};
            for (let j=0;j<9;j++) {
                if (sudoku[j][i] != ".") {
                    if (dict[sudoku[j][i]]) {
                        return false;
                    } else {
                        dict[sudoku[j][i]] += 1;
                    }
                }
            }
        }
        return true;
    }
    
    function checkBox(sudoku) {
        for (let k=0;k<=6; k+=3) {
            for (let l=0; l<=6; l+=3) {
                const dict = {"1": 0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8": 0, "9": 0};
                for (let i=0;i<3;i++) {
                    for (let j=0;j<3;j++) {
                        if (sudoku[i+k][j+l] != ".") {
                            if (dict[sudoku[i+k][j+l]]) {
                                return false;
                            } else {
                                dict[sudoku[i+k][j+l]] += 1;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
    
    function copyToBoard() {
        for (let i=0; i<9;i++) {
            for (let j=0;j<9;j++) {
                board[i][j] = copy[i][j] + '';
            }
        }
    }
    
    copyToBoard();
    return;
};