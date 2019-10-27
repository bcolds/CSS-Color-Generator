function randomRGB() {
    // Gets random RGB values and returns it as an array
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);

    var rgb = [r, g, b];

    return rgb;

}

function getRandomColors() {
    // Gets rgb array from randomRGB() function and formats it.
    var colours_array = [randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB()];
    var carray = []

    for (count = 0; count < 5; count++) {
        // iterates through colours array 
        carray.push("rgb(" + colours_array[count][0].toString() + ", " + colours_array[count][1].toString() + ", " + colours_array[count][2].toString() + ")");
    }

    return carray;
}

function setColorsOnLoad(colors) {
    // Sets colors on load.

    document.getElementById('containerOne').innerHTML = "<style>#containerOne { background-color: " + colors[0] + "; } </style>";
    document.getElementById('containerTwo').innerHTML = "<style>#containerTwo { background-color: " + colors[1] + "; } </style>";
    document.getElementById('containerThree').innerHTML = "<style>#containerThree { background-color: " + colors[2] + "; } </style>";
    document.getElementById('containerFour').innerHTML = "<style>#containerFour { background-color: " + colors[3] + "; } </style>";
    document.getElementById('containerFive').innerHTML = "<style>#containerFive { background-color: " + colors[4] + "; } </style>";

    // Sets RGB text
    document.getElementById('headingOne').innerHTML = colors[0];
    document.getElementById('headingTwo').innerHTML = colors[1];
    document.getElementById('headingThree').innerHTML = colors[2];
    document.getElementById('headingFour').innerHTML = colors[3];
    document.getElementById('headingFive').innerHTML = colors[4];
}

function setColors() {
    // Sets colors
    var random_colors = getRandomColors();

    document.getElementById('containerOne').innerHTML = "<style>#containerOne { background-color: " + random_colors[0] + "; } </style>";
    document.getElementById('containerTwo').innerHTML = "<style>#containerTwo { background-color: " + random_colors[1] + "; } </style>";
    document.getElementById('containerThree').innerHTML = "<style>#containerThree { background-color: " + random_colors[2] + "; } </style>";
    document.getElementById('containerFour').innerHTML = "<style>#containerFour { background-color: " + random_colors[3] + "; } </style>";
    document.getElementById('containerFive').innerHTML = "<style>#containerFive { background-color: " + random_colors[4] + "; } </style>";

    document.getElementById('headingOne').innerHTML = random_colors[0];
    document.getElementById('headingTwo').innerHTML = random_colors[1];
    document.getElementById('headingThree').innerHTML = random_colors[2];
    document.getElementById('headingFour').innerHTML = random_colors[3];
    document.getElementById('headingFive').innerHTML = random_colors[4];

}

// Sets colors by passing in colors.
var colors = getRandomColors();


// Sets inner HTML to random colours.
setColorsOnLoad(colors);
