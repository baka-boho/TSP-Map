
const dzSvg=document.querySelector('svg')
const circles = dzSvg.querySelectorAll('circle');



// circles.forEach(circle => {
//     if (circle.id !== "A") {
//         // keep this circle
//     } else {
//         // remove this circle
//         circle.remove();
//     }
// });
const green = '#84BB31';

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const x = circle.cx.baseVal.value;
        const y = circle.cy.baseVal.value;
        console.log(circle, x, y);
        let circleId = circle.id;

        let index = unvisted.indexOf(circleId);
        if (index !== -1) {
            unvisted.splice(index, 1);
        }

        let clickedCircle = document.getElementById(circleId);
        clickedCircle.style.fill = green;
        lastVisitedCircle = document.getElementById(visited[visited.length-1]);
        lastX = lastVisitedCircle.cx.baseVal.value;
        lastY = lastVisitedCircle.cy.baseVal.value;
        sum += Math.sqrt(
            Math.pow(x - lastX, 2) +
            Math.pow(y - lastY, 2)
            );
            
        visited.push(circleId);
            console.log(sum)
            console.log(visited)
            line.setAttribute('x1', x);
            line.setAttribute('y1', y);
            drawLine(x, y, lastX, lastY)
            if (unvisted.length === 0) {
            const circleA = document.getElementById('A');
            const lastX = circleA.cx.baseVal.value;
            const lastY = circleA.cy.baseVal.value;

            const lastVisitedCircle = document.getElementById(visited[visited.length - 1]);
            const x = lastVisitedCircle.cx.baseVal.value;
            const y = lastVisitedCircle.cy.baseVal.value;

            drawLine(x, y, lastX, lastY);
            sum += Math.sqrt(
                Math.pow(x - lastX, 2) +
                Math.pow(y - lastY, 2)
                );


        }

    },{once : true});
});
const circleToRemove = document.getElementById('A');
circleToRemove.removeEventListener('click',()=>{});


function drawLine(x1, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.style.stroke = 'white';
    line.style.strokeWidth = 4;
    line.style.strokeDasharray = '5,5';
    // set line styles


    // add line to SVG
    dzSvg.appendChild(line);
}


var unvisted = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N'];
var sum=0
var visited = ['A'];
let circleA = document.getElementById('A');
circleA.style.fill = green;


let lastVisitedCircle = document.getElementById(visited[visited.length-1]);
let lastX = lastVisitedCircle.cx.baseVal.value;
let lastY = lastVisitedCircle.cy.baseVal.value;

let distance;

const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', lastX);
line.setAttribute('y1', lastY);
line.style.stroke = 'white';
line.style.strokeWidth = 3;
line.style.strokeDasharray = '5,5';


document.addEventListener('mousemove', e => {
    let svgRect = dzSvg.getBoundingClientRect();
    let x = e.pageX - svgRect.left - window.scrollX;
    let y = e.pageY - svgRect.top - window.scrollY;
    if (unvisted.length === 0) {

        line.setAttribute('x2', lastX);
        line.setAttribute('y2', lastY);
        // text.textContent = `Total distance : ${Math.round(sum*2)} km solution : ${visited}`;
        text.textContent = '';
        document.getElementById('data-container').style.display="flex";
        document.getElementsByClassName('row')[0].style.justifyContent="space-between";
        document.getElementById('distance').textContent = Math.round(sum*2) +" Km";
        document.getElementById('solution').textContent = visited.join('-');
    }else{
        lastVisitedCircle = document.getElementById(visited[visited.length-1]);
        lastX = lastVisitedCircle.cx.baseVal.value;
        lastY = lastVisitedCircle.cy.baseVal.value;
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        distance = Math.sqrt(
            Math.pow(x - lastX, 2) +
            Math.pow(y - lastY, 2)
        );
        // text.textContent = `distance : ${Math.round(sum*2+distance*2)} km`;
        text.textContent = `distance : ${Math.round(sum*2)}+${Math.round(distance*2)} km`;
    }

    dzSvg.appendChild(line);

});


const text = document.createElement('div');
text.textContent = 'distance : ';
text.style.position = 'absolute';
text.style.top = '0';
text.style.left = '0';
text.style.pointerEvents = 'none';
text.style.color = 'white';
text.style.fontWeight = 'bold';

document.addEventListener('mousemove', e => {
    text.style.left = e.pageX + 30 + 'px';
    text.style.top = e.pageY - 30 + 'px';
});

document.body.appendChild(text);



const dialog = document.querySelector("dialog");
const showButton = document.getElementById('help');
const closeButton = document.getElementById('closeHelp');

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});