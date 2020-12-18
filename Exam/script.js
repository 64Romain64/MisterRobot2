let byeBye = document.getElementById("rom1");

function changeClass(){
    // alert("Bye Bye");
    byeBye.classList.add('leave');
};

byeBye.addEventListener("click", changeClass);