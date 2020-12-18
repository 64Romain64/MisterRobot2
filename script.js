let byeBye = document.getElementById("rom1");

function changeClass(){
    alert("Bye Bye");
    document.getElementById('rom1').classList.add('leave');
};

byeBye.addEventListener("click", changeClass);