// Select color input
var color = $("#colorPicker").val();

// Select size input

// When size is submitted by the user, call makeGrid()
$("#submitted").click(function makeGrid(e) {
  e.preventDefault();

  var height, width, table; // defining the variables
  
// input values for height, width, table
  height = $("#input_height").val();  
  width = $("#input_width").val();
  table = $("#pixel_canvas");
  
// the height and the width have to both be up to 400 and 100.
  if (height > 400) { 
    height = 400;
  }
  if (width > 100) {
    width = 100;
  }

  $("#pixelcanvas").empty(); 

  
  for (a = 0; a < height; a++) { // adding the rows to make canvas.
    var row = $("<tr></tr>");
    table.append(row);
    for (s = 0; s < width; s++) {
      $("<td></td>").appendTo(row);
    }
  }

  console.log();
});

$("#colorPicker").on("change", function() { // to get the fill in color for the boxes.
  color = $("#colorPicker").val();
});

$("#pixel_canvas").on("click", "td", function() {
  if ($(this).css('background-color') !== "rgba(0, 0, 0, 0)") {
    $(this).css("background-color", "rgba(0, 0, 0, 0)"); // set it to defult or white background.
  } else {
    $(this).css("background-color", color);
  }
});

// note: 
