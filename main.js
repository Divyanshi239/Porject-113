function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 200, 160, 250, 200);
    fill("green")
    rect(90, 90, 450, 15);
    rect(540, 90, 15, 320);
    rect(90, 410, 450, 15);
    rect(90, 90, 15, 320);
    fill("red");
    circle(90, 90, 70);
    circle(540, 90, 70);
    circle(90, 410, 70);
    circle(540, 410, 70)
}

function take_snapshot() {
    save('Divyanshi.png');
}