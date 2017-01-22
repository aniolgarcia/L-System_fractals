var angle;
var axiom = "F-G-G";
var sentence = axiom;
var len = 600;

var rules = [];
rules[0] = {
  a: "F",
  b: "F-G+F+G-F"
}
rules[1] = {
  a: "G",
  b: "GG"
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
  translate(0, 0);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F" || current == "G") {
      line(0, 0, 0, len);
      translate(0, len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    }
  }
}

function setup() {
  createCanvas(600, 600);
  angle = radians(120);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("Step");
  button.mousePressed(generate);
}
