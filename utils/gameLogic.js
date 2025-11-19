function winningPattern(grids,val) {
    const case1 =
      grids[0].value === val &&
      grids[1].value === val &&
      grids[2].value === val;
    const case2 =
      grids[3].value === val &&
      grids[4].value === val &&
      grids[5].value === val;
    const case3 =
      grids[6].value === val &&
      grids[7].value === val &&
      grids[8].value === val;
    const case4 =
      grids[0].value === val &&
      grids[4].value === val &&
      grids[8].value === val;
    const case5 =
      grids[2].value === val &&
      grids[4].value === val &&
      grids[6].value === val;
    const case6 =
      grids[0].value === val &&
      grids[3].value === val &&
      grids[6].value === val;
    const case7 =
      grids[1].value === val &&
      grids[4].value === val &&
      grids[7].value === val;
    const case8 =
      grids[2].value === val &&
      grids[5].value === val &&
      grids[8].value === val;

    return [case1, case2, case3, case4, case5, case6, case7, case8];
    
  }

export default winningPattern