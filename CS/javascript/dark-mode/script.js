function darkMode() {
    /* document.
    body.getElementById("mode").style.backgroundColor;*/

        if (document.body.style.backgroundColor === "red"){
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } else {
            document.body.style.backgroundColor = "red";
            document.body.style.color = "blue";
        }
    }

