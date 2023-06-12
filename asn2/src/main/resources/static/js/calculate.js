// Initialize the grades array
var grades = [];

var fValue = 0;
var maxValue = 100;


function updateHistogram() {

    maxValue = parseFloat(document.getElementById("max").value);
  var bounds = [
    parseFloat(document.getElementById("aplus").value),
    parseFloat(document.getElementById("a").value),
    parseFloat(document.getElementById("aminus").value),
    parseFloat(document.getElementById("bplus").value),
    parseFloat(document.getElementById("b").value),
    parseFloat(document.getElementById("bminus").value),
    parseFloat(document.getElementById("cplus").value),
    parseFloat(document.getElementById("c").value),
    parseFloat(document.getElementById("cminus").value),
    parseFloat(document.getElementById("d").value)
  ];
  fValue = parseFloat(document.getElementById("f").value);

  for (var i = 0; i < bounds.length - 1; i++) {
    if (bounds[i] <= bounds[i + 1]) {
      
      alert("Error: Overlapping grade bounds detected. Please adjust the grade boundaries.");
      return; 
    }
  }


  
  var histogramElements = document.querySelectorAll(".box-container2 tr");
  histogramElements.forEach(function (element) {
    element.innerHTML = "";
  });

  
  var gradeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  grades.forEach(function (grade) {
    if (grade >= bounds[0]) {
      gradeCount[0]++;
    } else if (grade >= bounds[1]) {
      gradeCount[1]++;
    } else if (grade >= bounds[2]) {
      gradeCount[2]++;
    } else if (grade >= bounds[3]) {
      gradeCount[3]++;
    } else if (grade >= bounds[4]) {
      gradeCount[4]++;
    } else if (grade >= bounds[5]) {
      gradeCount[5]++;
    } else if (grade >= bounds[6]) {
      gradeCount[6]++;
    } else if (grade >= bounds[7]) {
      gradeCount[7]++;
    } else if (grade >= bounds[8]) {
      gradeCount[8]++;
    } else if (grade >= bounds[9]) {
      gradeCount[9]++;
    } else {
      gradeCount[10]++;
    }
  });

  
  var histogramTables = document.querySelectorAll(".box-container2 table");
  histogramTables.forEach(function (table, index) {
    var trId = "";
    switch (index) {
      case 0:
        trId = "aplush";
        break;
      case 1:
        trId = "ah";
        break;
      case 2:
        trId = "aminush";
        break;
      case 3:
        trId = "bplush";
        break;
      case 4:
        trId = "bh";
        break;
      case 5:
        trId = "bminush";
        break;
      case 6:
        trId = "cplush";
        break;
      case 7:
        trId = "ch";
        break;
      case 8:
        trId = "cminush";
        break;
      case 9:
        trId = "dh";
        break;
      case 10:
        trId = "fh";
        break;
    }

    for (var i = 0; i < gradeCount[index]; i++) {
      var cell = document.createElement("td");
      table.querySelector("#" + trId).appendChild(cell);
    }
  });
}


function addGrade() {
  var newGradeInput = document.getElementById("new-grade");
  var newGrade = parseFloat(newGradeInput.value);

  
  if (!isNaN(newGrade) && newGrade >= fValue && newGrade <= maxValue) {
    
    grades.push(newGrade);

    
    updateHistogram();

    
    newGradeInput.value = "";
  } else {
    
    alert("Invalid grade input. Please enter a number between " + fValue + " and " + maxValue);
  }
}


var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addGrade);


var newGradeInput = document.getElementById("new-grade");
newGradeInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addGrade();
  }
});


var gradeInputs = document.querySelectorAll(".left-div input");
gradeInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    
    updateHistogram();
  });
});
