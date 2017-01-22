var angle;
var axiom = "F";
var sentence = axiom;
var len = 600;

var rules = [];
rules[0] = {
  a: "F",
  b: "+G-F-G+"
}
rules[1] = {
  a: "G",
  b: "-F+G+F-"
}

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();

}

function turtle() {
  background(51);
  resetMatrix();
  translate(width, height-10);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F" || current == "G") {
      line(0, 0, -len, 0);
      translate(-len, 0);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    }
  }
}

function setup() {
  createCanvas(600, 600);
  angle = radians(60);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("Step");
  button.mousePressed(generate);
}
