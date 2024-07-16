const dados = document.querySelectorAll(".dados");
const enviarForm = document.querySelector(".formulario");

enviarForm.addEventListener("submit", function (event) {
    event.preventDefault();

    dados.forEach(input => {
        const aviso = input.nextElementSibling

        if (input.value === "") {
            input.classList.add("invalido");
            aviso.classList.add("preencher");
            input.classList.remove("valido")

        } else {
            input.classList.add("valido");
            input.classList.remove("invalido");
            aviso.classList.remove("preencher");
        }
    })
});