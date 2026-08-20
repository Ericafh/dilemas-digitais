// =====================================
// MENU MOBILE
// =====================================

const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Fechar o menu ao clicar em um link

const links = document.querySelectorAll("#menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// =====================================
// CHECKLIST
// =====================================

const checkboxes = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
);

const checklistResult = document.getElementById("checklist-result");


checkboxes.forEach(checkbox => {

    checkbox.addEventListener("change", atualizarChecklist);

});


function atualizarChecklist() {

    const total = checkboxes.length;

    const marcados = document.querySelectorAll(
        '.checklist input[type="checkbox"]:checked'
    ).length;


    if (marcados === 0) {

        checklistResult.textContent =
            "Comece verificando os itens acima.";

    }

    else if (marcados < total) {

        checklistResult.textContent =
            `${marcados} de ${total} itens verificados. Continue!`;

    }

    else {

        checklistResult.textContent =
            "✅ Tudo certo! Você verificou todos os pontos importantes.";

    }

}


// =====================================
// QUIZ
// =====================================

const options = document.querySelectorAll(".option");

const quizResult = document.getElementById("quiz-result");


options.forEach(option => {

    option.addEventListener("click", () => {

        // Desabilita todas as alternativas

        options.forEach(item => {

            item.disabled = true;

        });


        const respostaCorreta =
            option.dataset.correct === "true";


        if (respostaCorreta) {

            option.classList.add("correct");

            quizResult.textContent =
                "✅ Muito bem! Conhecer os principais pontos dos Termos de Uso ajuda a tomar decisões mais conscientes.";

            quizResult.style.color = "#087443";

        }

        else {

            option.classList.add("incorrect");

            quizResult.textContent =
                "❌ Essa não é a melhor escolha. Antes de aceitar, procure entender as regras e a política de privacidade.";

            quizResult.style.color = "#b42318";


            // Destaca a resposta correta

            options.forEach(item => {

                if (item.dataset.correct === "true") {

                    item.classList.add("correct");

                }

            });

        }

    });

});


// =====================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =====================================

const elementos = document.querySelectorAll(
    ".card, .dilema, .solution-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(elemento => {

    observer.observe(elemento);

});