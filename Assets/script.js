function add_local() {
    const display = {};
    display.name = document.getElementById('name').value;
    display.email = document.getElementById('email').value;
    display.subjct = document.getElementById('subject').value;
    display.comment=document.getElementById('comment').value;

    window.localStorage.setItem('display', JSON.stringify(display));
   alert("Thank you, I will contact you soon.");
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('comment').value = "";


}



function show_local() {

    let _display = JSON.parse(localStorage.getItem("display"));
    document.getElementById('name').value = _display.name;
    document.getElementById('email').value = _display.email;
    document.getElementById('subject').value = _display.subjct;
    document.getElementById('comment').value = _display.comment;

    document.getElementById('display').value = Object.values(_display);

}

