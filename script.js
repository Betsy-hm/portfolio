document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contato-formulario");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        let erro = false;
        let mensagemErro = "";

        // Validación nombre
        if (!nome || nome.value.trim() === "") {
            erro = true;
            mensagemErro += "Nome é obrigatório.\n";
        }

        // Validación email
        if (!email || !validarEmail(email.value)) {
            erro = true;
            mensagemErro += "E-mail inválido.\n";
        }

        // Validación mensaje
        if (!mensagem || mensagem.value.trim() === "") {
            erro = true;
            mensagemErro += "Mensagem é obrigatória.\n";
        }

        if (erro) {
            alert(mensagemErro);
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});