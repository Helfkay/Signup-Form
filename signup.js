function check () {
    var valid = true, error = "", field = ""

    field = document.getElementById("fname");
    error = document.getElementById("cfname");
    if (!field.checkValidity()) {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "First Name cannot be empty"
    } else {
        field.classList.remove("err");
        error.innerHTML = "";
    }
}

