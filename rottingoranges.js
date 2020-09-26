/**
 * 994 Rotting Oranges
 * In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let fresh = [];
    let rotten = [];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                fresh.push(i.toString()+j.toString());
            }
            else if(grid[i][j]==2){
                rotten.push(i.toString()+j.toString());
            }
        }
    }
    let minutes = 0;
    let directions = [[1,0],[0,1],[-1,0],[0,-1]];
    while(fresh.length>0){
        let infected = [];
        for(let i=0;i<rotten.length;i++){
            let m = parseInt(rotten[i].charAt(0));
            let n = parseInt(rotten[i].charAt(1));
            
            for(let j=0;j<directions.length;j++){
                let nextI = m + directions[j][0];
                let nextJ = n + directions[j][1];
                if(fresh.includes(nextI.toString()+nextJ.toString())){
                    fresh.splice(fresh.indexOf(nextI.toString()+nextJ.toString()),1);
                    infected.push(nextI.toString()+nextJ.toString());
                }
            }
        }
        if(infected.length==0){
            return -1;
        }
        rotten = infected;
        minutes++;
    }
    return minutes;
};