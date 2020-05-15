
// Verify login credentials
(function () {
    "use strict";

    if (!document.querySelector("#login-page")) {
        return;
    }

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        if (emailInput.value === "") {
            event.preventDefault();
            alert("Digite seu e-mail!")
        }

        if (passwordInput.value === "") {
            event.preventDefault();
            alert("Digite sua senha!")
        }
    });
})();

// Send login recovery
(function () {
    "use strict";

    if (!document.querySelector("#recovery-page")) {
        return;
    }

    const emailInput = document.querySelector("#email");
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        if (emailInput.value === "") {
            event.preventDefault();

            alert("Por favor, digite seu e-mail!");
        } else {
            alert("Enviamos um e-mail com instruções de como redefinir sua senha.")
        }
    });
})();


// Uppercase signup names
(function () {
    "use strict";

    if (!document.querySelector("#signup-page")) {
        return;
    }

    const form = {
        _el:             document.querySelector("form"),
        nome:            document.querySelector("#nome"),
        sobrenome:       document.querySelector("#sobrenome"),
        senha:             document.querySelector("#senha"),
        nascimento:      document.querySelector("#nascimento"),
        sexo:            document.querySelector("#sexo"),
        email:           document.querySelector("#email"),
        telefone:        document.querySelector("#telefone"),
        end_cidade:      document.querySelector("#end_cidade"),
        end_bairro:      document.querySelector("#end_bairro"),
        end_tipolog:     document.querySelector("#end_tipolog"),
        end_log:         document.querySelector("#end_log"),
        end_numero:      document.querySelector("#end_numero"),
        end_complemento: document.querySelector("#end_complemento"),
        end_cep:         document.querySelector("#end_cep"),
        newsletter:      document.querySelector("#newsletter"),
    };

    const uppercase = (event) => event.target.value = event.target.value.toUpperCase();

    form.nome.addEventListener("keyup", uppercase);
    form.sobrenome.addEventListener("keyup", uppercase);

    form._el.addEventListener("submit", function (event) {
        const inputs = Object.keys(form);
        for (let i = 0; i < inputs.length; i++) {
            let currentForm = form[inputs[6-i]];

            if (!currentForm.value) {
                event.preventDefault();
                alert(`Por favor, preencha todos os campos}!`);
            } else{
                alert(`Conta criada com sucesso}!`);
            }

            break;
        }
    });
})();
