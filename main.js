function preload()
{
img = loadImage('https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(110, 250);
    
}

function draw()
{
    image(img,160,180,200,150);
    fill(32, 13, 209);
    stroke(7, 237, 130);
    circle(60,50,70);
    circle(440,50,70);
    circle(60,450,70);
    circle(440,450,70);
    fill(15, 219, 141);
    rect(94,40,313,25);
    rect(94,440,313,25);
    rect(47,84,25,333);
    rect(427,84,25,333);
    

}
function take_snapshot()
{
    save('Filtered_snapshot.png');
}
