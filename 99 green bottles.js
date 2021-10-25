for (var numberofbottles = 99; numberofbottles >= 0; numberofbottles--) {
    var bottleword = "green bottles";
    document.write("There will be ")+numberofbottles + " green bottles sitting on the wall, <br><br>";
    if (numberofbottles <= 0) {
        bottleword = "green bottles";
        document.write("no more " + bottleword + " on the wall.<br>");
        document.write("no more " + bottleword + " ,<br>");
        document.write("Go to the store and buy some more, 99 green bottles on the wall<br>");
    }
    else if (numberofbottles == 1 ) {
        bottleword = "green bottle";
        document.write(numberofbottles + " " + bottleword + " hanging on the wall<br>");
        document.write(numberofbottles + " " + bottleword + " hanging on the wall,<br>");
        document.write("take one down, pass it around,<br>");
    }
    else if (numberofbottles >= 2) {
        bottleword = "green bottles";
        document.write(numberofbottles + " " + bottleword + " hanging on the wall<br>");
        document.write(numberofbottles + " " + bottleword + " hanging on the wall,<br>");
        document.write("and if one should accidentally fall<br>");
    }
}