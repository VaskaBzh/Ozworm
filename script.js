let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
    let excel = document.createElement('div')
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1;
    y = 10;

for (let i=0; i<excel.length; i++) {
    if (x>10) {
        x=1;
        y--;
    }
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}

function generateSnake() {
    let posX = Math.round(Math.random() * (10-3) + 3)
    let posY = Math.round(Math.random() * (10-1) + 1)
    return[posX,posY];
}

let coordinates = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' + coordinates[1] + '"]')];

for (let i = 0; i<snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody')
}

snakeBody[0].classList.add('head');

let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10-3) + 3)
        let posY = Math.round(Math.random() * (10-1) + 1)
        return[posX,posY];
    }

    let mouseCoordinates = generateMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

    while(mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }

    mouse.classList.add('mouse');
}

 createMouse();

 let direction = 'right';
 let steps = false;
 
 let input = document.createElement('input');
 document.body.appendChild(input);
 input.style.cssText = `
 margin: auto;
 margin-top: 40px;
 font-size: 30px;
 display: block
  `;

  let score = 0;
  input.value = `Ваше пиво: ${score}`;

 function move() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length-1].classList.remove('snakeBody');
    snakeBody.pop();

        if (direction == 'right'){
            if (direction == 'right'){
                if (snakeCoordinates[0] < 10) {
                    snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]+1) + '"][posY = "' + snakeCoordinates[1] + '"]')); 
                } else {
                    snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
                } 
            } 
        } else if (direction == 'left'){
            if (snakeCoordinates[0] > 1) {
                snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0]-1) + '"][posY = "' + snakeCoordinates[1] + '"]')); 
            } else {
                snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinates[1] + '"]'));
            } 
        }  else if (direction == 'up'){
            if (snakeCoordinates[1] < 10) {
                snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]+1) + '"]')); 
            } else {
                snakeBody.unshift(document.querySelector('[posX = "'+ snakeCoordinates[0] + '"][posY = "1"]'));
            } 
        } else if (direction == 'down'){
            if (snakeCoordinates[1] > 1) {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]-1) + '"]')); 
            } else {
                snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
            } 
        }
        
    if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY') ) {
        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        createMouse();
        score++;
        input.value = `Ваше пиво: ${score}`;
    }

    if (snakeBody[0].classList.contains('snakeBody')) {
        setTimeout(() => {
            alert(`Игра окончена. Ваше пиво: ${score}`);
        }, 200);
        clearInterval(interval);
        field.style.background = 'url(Bluet.gif) center no-repeat';
        field.style.backgroundSize = "cover";
        mouse.style.background = 'url(#) center no-repeat';
        snakeBody[0].style.background = 'url(#) center no-repeat';
        snakeBody[1].style.background = 'url(#) center no-repeat';
        snakeBody[2].style.background = 'url(#) center no-repeat';
        snakeBody[3].style.background = 'url(#) center no-repeat';
        snakeBody[4].style.background = 'url(#) center no-repeat';
        snakeBody[5].style.background = 'url(#) center no-repeat';
        snakeBody[6].style.background = 'url(#) center no-repeat';
        snakeBody[7].style.background = 'url(#) center no-repeat';
        snakeBody[8].style.background = 'url(#) center no-repeat';
        snakeBody[9].style.background = 'url(#) center no-repeat';
        snakeBody[20].style.background = 'url(#) center no-repeat';
        snakeBody[21].style.background = 'url(#) center no-repeat';
        snakeBody[22].style.background = 'url(#) center no-repeat';
        snakeBody[23].style.background = 'url(#) center no-repeat';
        snakeBody[24].style.background = 'url(#) center no-repeat';
        snakeBody[25].style.background = 'url(#) center no-repeat';
        snakeBody[26].style.background = 'url(#) center no-repeat';
        snakeBody[27].style.background = 'url(#) center no-repeat';
        snakeBody[28].style.background = 'url(#) center no-repeat';
        snakeBody[29].style.background = 'url(#) center no-repeat';
        snakeBody[30].style.background = 'url(#) center no-repeat';
        snakeBody[31].style.background = 'url(#) center no-repeat';
        snakeBody[32].style.background = 'url(#) center no-repeat';
        snakeBody[33].style.background = 'url(#) center no-repeat';
        snakeBody[34].style.background = 'url(#) center no-repeat';
        snakeBody[35].style.background = 'url(#) center no-repeat';
        snakeBody[36].style.background = 'url(#) center no-repeat';
        snakeBody[37].style.background = 'url(#) center no-repeat';
        snakeBody[38].style.background = 'url(#) center no-repeat';
        snakeBody[39].style.background = 'url(#) center no-repeat';
        snakeBody[40].style.background = 'url(#) center no-repeat';
        snakeBody[41].style.background = 'url(#) center no-repeat';
        snakeBody[42].style.background = 'url(#) center no-repeat';
        snakeBody[43].style.background = 'url(#) center no-repeat';
        snakeBody[44].style.background = 'url(#) center no-repeat';
        snakeBody[45].style.background = 'url(#) center no-repeat';
        snakeBody[46].style.background = 'url(#) center no-repeat';
        snakeBody[47].style.background = 'url(#) center no-repeat';
        snakeBody[48].style.background = 'url(#) center no-repeat';
        snakeBody[49].style.background = 'url(#) center no-repeat';
        snakeBody[50].style.background = 'url(#) center no-repeat';
        snakeBody[51].style.background = 'url(#) center no-repeat';
        snakeBody[52].style.background = 'url(#) center no-repeat';
        snakeBody[53].style.background = 'url(#) center no-repeat';
        snakeBody[54].style.background = 'url(#) center no-repeat';
        snakeBody[55].style.background = 'url(#) center no-repeat';
        snakeBody[56].style.background = 'url(#) center no-repeat';
        snakeBody[57].style.background = 'url(#) center no-repeat';
        snakeBody[58].style.background = 'url(#) center no-repeat';
        snakeBody[59].style.background = 'url(#) center no-repeat';
        snakeBody[60].style.background = 'url(#) center no-repeat';
        snakeBody[61].style.background = 'url(#) center no-repeat';
        snakeBody[62].style.background = 'url(#) center no-repeat';
        snakeBody[63].style.background = 'url(#) center no-repeat';
        snakeBody[64].style.background = 'url(#) center no-repeat';
        snakeBody[65].style.background = 'url(#) center no-repeat';
        snakeBody[66].style.background = 'url(#) center no-repeat';
        snakeBody[67].style.background = 'url(#) center no-repeat';
        snakeBody[68].style.background = 'url(#) center no-repeat';
        snakeBody[69].style.background = 'url(#) center no-repeat';
        snakeBody[70].style.background = 'url(#) center no-repeat';
        snakeBody[71].style.background = 'url(#) center no-repeat';
        snakeBody[72].style.background = 'url(#) center no-repeat';
        snakeBody[73].style.background = 'url(#) center no-repeat';
        snakeBody[74].style.background = 'url(#) center no-repeat';
        snakeBody[75].style.background = 'url(#) center no-repeat';
        snakeBody[76].style.background = 'url(#) center no-repeat';
        snakeBody[77].style.background = 'url(#) center no-repeat';
        snakeBody[78].style.background = 'url(#) center no-repeat';
        snakeBody[79].style.background = 'url(#) center no-repeat';
        snakeBody[80].style.background = 'url(#) center no-repeat';
        snakeBody[81].style.background = 'url(#) center no-repeat';
        snakeBody[82].style.background = 'url(#) center no-repeat';
        snakeBody[83].style.background = 'url(#) center no-repeat';
        snakeBody[84].style.background = 'url(#) center no-repeat';
        snakeBody[85].style.background = 'url(#) center no-repeat';
        snakeBody[86].style.background = 'url(#) center no-repeat';
        snakeBody[87].style.background = 'url(#) center no-repeat';
        snakeBody[88].style.background = 'url(#) center no-repeat';
        snakeBody[89].style.background = 'url(#) center no-repeat';
        snakeBody[90].style.background = 'url(#) center no-repeat';
        snakeBody[91].style.background = 'url(#) center no-repeat';
        snakeBody[92].style.background = 'url(#) center no-repeat';
        snakeBody[93].style.background = 'url(#) center no-repeat';
        snakeBody[94].style.background = 'url(#) center no-repeat';
        snakeBody[95].style.background = 'url(#) center no-repeat';
        snakeBody[96].style.background = 'url(#) center no-repeat';
        snakeBody[97].style.background = 'url(#) center no-repeat';
        snakeBody[98].style.background = 'url(#) center no-repeat';
        snakeBody[99].style.background = 'url(#) center no-repeat';
        snakeBody[100].style.background = 'url(#) center no-repeat';
        snakeBody[101].style.background = 'url(#) center no-repeat';
    }

    snakeBody[0].classList.add('head');
    for (let i = 0; i<snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }

    steps = true;
 }

 let interval = setInterval(move, 300);

 window.addEventListener('keydown', function (e) {
    if (steps == true) {
        if (e.keyCode == 37 && direction!= 'right') {
            direction = 'left';
            steps = false;
        }
        else if (e.keyCode == 38 && direction!= 'down'){
            direction = 'up';
            steps = false;
        }
        else if (e.keyCode == 39 && direction!= 'left') {
            direction = 'right';
            steps = false;
        }
        else if (e.keyCode == 40 && direction!= 'up') {
            direction = 'down';
            steps = false;
        }
    }
    
 });