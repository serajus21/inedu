/* <button class="menuBar" id="show" onclick="showMenu()">|||</button>
<button class="menuBar" id="hide" onclick="hideMenu()">X</button> */

function showMenu() {
    document.getElementById('show').style.display="none";
    document.getElementById('hide').style.display="inline-block";
    document.getElementById('nav').style.right="0%";
}

function hideMenu() {
    document.getElementById('hide').style.display="none";
    document.getElementById('show').style.display="inline-block";
    document.getElementById('nav').style.right="-100%";
}