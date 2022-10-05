var shortestPathBinaryMatrix = function(grid) {  
    if (grid[0][0]) return -1;
    
    const len = grid.length;
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const validate = (x,y) => x>=0 && x<len && y>=0 && y<len && !grid[x][y];
    const queue = [{x:0, y:0, dist:1}];
    // const queue = [{ coord: [0, 0], dist: 1 }];
    grid[0][0] = 1;
    
    while (queue.length) {
        const {x,y,dist} = queue.shift();
        // const { coord: [x, y], dist } = queue.shift();
        if (x==len-1 && y==len-1) {
            return dist;
        }
        for (let dir of dirs) {
            const xCoord = x+dir[0];
            const yCoord = y+dir[1];
            if (validate(xCoord,yCoord)) {
                queue.push({x:xCoord,y:yCoord,dist:dist+1});
                grid[xCoord][yCoord]=1;
            }
        }
    }
    return -1;
}