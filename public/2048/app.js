const main = () =>{
  genrandom();
  genrandom();   
}

const randomnum = () =>{
  random1 = Math.floor(Math.random()*10)+1;
  if(random1 > 2){
    return 2;
  }
  else{
    return 4;
  }
}

const genrandom = () =>{
  row = Math.floor(Math.random()*4)+1;
  col = Math.floor(Math.random()*4)+1;
  id = `col${col}row${row}`;
  console.log(id);
  if(document.getElementById(id).innerHTML == ""){
    document.getElementById(id).innerHTML = randomnum();
  }
}

const moveUp = () =>{
  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(row != 1){
      upperRow = row-1
      upperId =  `col${col}row${upperRow}`;
      console.log(upperId);
      myNum = e.innerHTML;
      condNum = document.getElementById(upperId).innerHTML;
      if (condNum == myNum || condNum == "") {
        document.getElementById(upperId).innerHTML += myNum;
        e.innerHTML = ""
      }
    }
  }
});
    
}
const moveDown = () =>{
  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(row != 4){
      console.log(row);
      lowerRow = row+1
      lowerId =  `col${col}row${lowerRow}`;
      console.log(lowerId);
      myNum = e.innerHTML;
      condNum = document.getElementById(lowerId).innerHTML;
      if (condNum == myNum || condNum == "") {
        document.getElementById(lowerId).innerHTML += myNum;
        e.innerHTML = ""
      }
    }
  }
});
}
const moveLeft = () =>{
  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(col != 1){
      console.log(col);
      lefterCol = col-1
      lefterId =  `col${lefterCol}row${row}`;
      console.log(lefterId);
      myNum = e.innerHTML;
      condNum = document.getElementById(lefterId).innerHTML;
      if (condNum == myNum || condNum == "") {
        document.getElementById(lefterId).innerHTML += myNum;
        e.innerHTML = ""
      }
    }
  }
});
}
const moveRight = () =>{
  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(col != 4){
      righterCol = col+1
      righterId =  `col${righterCol}row${row}`;
      console.log(righterId);
      myNum = e.innerHTML;
      condNum = document.getElementById(righterId).innerHTML;
      if (condNum == myNum || condNum == "") {
        document.getElementById(righterId).innerHTML += myNum;
        e.innerHTML = ""
      }
    }
  }
});
}

const checkArrow = (e) =>{
  switch (e) {
    case "ArrowUp":
      moveUp()
      break;
    case "ArrowDown":
      moveDown()
      break;
    case "ArrowLeft":
      moveLeft()
      break;
    case "ArrowRight":
      moveRight()
      break;
    default:
      break;
  }
} 

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    checkArrow(name);
  }, false);

main();