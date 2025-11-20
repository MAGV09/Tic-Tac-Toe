'use strict'

const grids = []

function grid (id,value){
return {id,value}
}
function createGrid(id,value){
grids.push(grid(id,value))
}

for(let i =1;i<=9;i++){
    createGrid(i,'')
}
export default grids