function showMenu() {
    document.getElementById('menu').style.display = "";

    document.body.onmousedown = function() { 
        document.getElementById('menu').style.display = "none";

    }
}

