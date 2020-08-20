const canvas = document.getElementById("cityImage");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(196, 218, 255)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Note height of canvas is 250
function makeBuilding(x, height, width=canvas.width/4) {
    ctx.fillRect(x, canvas.height - height, width, height);
    ctx.fillStyle = "yellow";
    var winSize = 10;
    var gap = 10;
    for(var e = 0; e < height/(winSize + gap); e++) {
	for(var u = 0; u < (canvas.width/4/(winSize + gap)) - 1; u++) {
	    ctx.fillRect(x + (u * winSize) + (u * gap) + gap, canvas.height - (height - (e * winSize) - (e * gap)) + gap, winSize, winSize);
	}
    }
}

var heights = [150, 200, 175, 210];

for(var y = 0; y < 5; y++) {
    var color = Math.floor(Math.random() * 200) + 25;
    ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
    var h = heights[y];
    makeBuilding(y * canvas.width/4, h);
}

function makeArrow(x, y, width=150, height=20) {
    ctx.fillStyle = "rgb(168, 255, 176)";
    ctx.fillRect(x, y, width, height);
    ctx.beginPath();
    ctx.moveTo(x + width, y - 10);
    ctx.lineTo(x + width, y + height + 10);
    ctx.lineTo(x + width + 30, y + (height / 2));
    ctx.fill();
}

// Horizantal arrow on bottom
ctx.save();
ctx.translate(130, 210);
ctx.rotate(180 * Math.PI / 180);
makeArrow(-60, -20);
ctx.restore();

// Arrow pointing down on right
ctx.save();
ctx.rotate(60 * Math.PI / 180);
makeArrow(canvas.width/2 - 1, -100);
ctx.restore();

// Arrow pointing up on left
ctx.save();
ctx.translate(100, 135);
ctx.rotate(300 * Math.PI / 180);
makeArrow(-75, -50);
ctx.restore();

