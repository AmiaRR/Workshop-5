let table;
let Kitkat;

function preload(){
 table = loadTable('Chocolate(Sheet1).csv', 'csv', 'header');
 Kitkat = loadImage('images/Kitkat.jpg');
}

function setup() {
 createCanvas(400, 400);
 imageMode(CENTER);
}

function DayLabels(){
  for (x=0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let Day = row.get("Day"); 
    fill(0);
    text(Day, 30 + x * 50, 350);
  }
}

function showKitKat(){
  for (x=0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countKitKat = row.get("Kitkat");
    for (y= 0; y < countKitKat; y++){
      image(Kitkat, 30 + x * 50, 300 - y * 50, 40, 30)
    }
  }
}

function draw() {
  background(220); 
  DayLabels(); 
  showKitKat(); 
  text('Day , width/2, 380');
}
