const main = () =>{
     gameStart();
}

const gameStart = () =>{
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
  isOk = false;
  do {
    row = Math.floor(Math.random()*4)+1;
    col = Math.floor(Math.random()*4)+1;
    id = `col${col}row${row}`;
    if(document.getElementById(id).innerHTML == ""){
      document.getElementById(id).innerHTML = randomnum();
      isOk = true;
    }
  } while (!isOk);
}


//movement



const moveUp = () =>{
  for (let i = 0; i < 4; i++) {
    all = document.querySelectorAll('.block');
    all.forEach(e => {
      if(e.innerHTML != ""){
      row = parseInt(e.id.slice(7, 8));
      col = parseInt(e.id.slice(3, 4));
      if(row != 1){
        upperRow = row-1
        upperId =  `col${col}row${upperRow}`;

        myNum = e.innerHTML;
        condNum = document.getElementById(upperId).innerHTML;
        if (condNum == myNum || condNum == "") {
          if(condNum == myNum){
            document.getElementById(upperId).innerHTML = parseInt(condNum) + parseInt(myNum)
            e.innerHTML = ""
          }
          else{
            document.getElementById(upperId).innerHTML += myNum;
            e.innerHTML = ""
          }
        }
      }
    }
  });   
  }
  }

const moveDown = () =>{
  for (let i = 0; i < 4; i++) {
  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(row != 4){
      lowerRow = row+1
      lowerId =  `col${col}row${lowerRow}`;
      myNum = e.innerHTML;
      condNum = document.getElementById(lowerId).innerHTML;
      if (condNum == myNum || condNum == "") {
        if(condNum == myNum){
          document.getElementById(lowerId).innerHTML = parseInt(condNum) + parseInt(myNum)
          e.innerHTML = ""
        }
        else{
        document.getElementById(lowerId).innerHTML += myNum;
        e.innerHTML = ""
        }
      }
    }
  }
});
}
}

const moveLeft = () =>{
  for (let i = 0; i < 4; i++) {
    all = document.querySelectorAll('.block');
    all.forEach(e => {
      if(e.innerHTML != ""){
      row = parseInt(e.id.slice(7, 8));
      col = parseInt(e.id.slice(3, 4));
      if(col != 1){
        lefterCol = col-1
        lefterId =  `col${lefterCol}row${row}`;
        myNum = e.innerHTML;
        condNum = document.getElementById(lefterId).innerHTML;
        if (condNum == myNum || condNum == "") {
          if(condNum == myNum){
            document.getElementById(lefterId).innerHTML = parseInt(condNum) + parseInt(myNum)
            e.innerHTML = ""
          }
          else{
          document.getElementById(lefterId).innerHTML += myNum;
          e.innerHTML = ""
        }
      }
      }
    }
  });
}
}
  
const moveRight = () =>{
  for (let i = 0; i < 4; i++) {

  all = document.querySelectorAll('.block');
  all.forEach(e => {
    if(e.innerHTML != ""){
    row = parseInt(e.id.slice(7, 8));
    col = parseInt(e.id.slice(3, 4));
    if(col != 4){
      righterCol = col+1
      righterId =  `col${righterCol}row${row}`;
      myNum = e.innerHTML;
      condNum = document.getElementById(righterId).innerHTML;
      if (condNum == myNum || condNum == "") {
        if(condNum == myNum){
          document.getElementById(righterId).innerHTML = parseInt(condNum) + parseInt(myNum)
          e.innerHTML = ""
        }
        else{
        document.getElementById(righterId).innerHTML += myNum;
        e.innerHTML = ""
        }
      }
    }
  }
});
}
}
//checking movement

const checkArrow = (e) =>{
  switch (e) {
    case "ArrowUp":
      moveUp();
      genrandom();
      break;
    case "ArrowDown":
      moveDown();
      genrandom();
      break;
    case "ArrowLeft":
      moveLeft();
      genrandom();
      break;
    case "ArrowRight":
      moveRight();
      genrandom();
      break;
    default:
      break;
  }
} 

document.addEventListener('keydown', (event) => {
    var name = event.key;
    checkArrow(name);
  }, false);

main();