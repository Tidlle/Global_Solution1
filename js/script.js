document.addEventListener("DOMContentLoaded", () => {
  // Verifica se o usuário está logado
  const isLoggedIn = localStorage.getItem("sinais-logado") === "true";
  const userType = localStorage.getItem("tipo-usuario");

  // Exibe ou esconde os links protegidos
  document.querySelectorAll(".auth-only").forEach(el => {
    el.style.display = isLoggedIn ? "inline-block" : "none";
  });

  // Renderiza botão Entrar ou Sair dinâmico
  function renderAuth(id) {
    const el = document.getElementById(id);
    if (!el) return;

    if (isLoggedIn) {
      el.innerHTML = '<a href="#" class="logout-button" id="logout-btn">Sair</a>';
      document.querySelectorAll("#logout-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.removeItem("sinais-logado");
          localStorage.removeItem("tipo-usuario");
          location.reload();
        });
      });
    } else {
      el.innerHTML = '<a href="login-paciente.html" class="logout-button">Entrar</a>';
    }
  }

  renderAuth("auth-action");
  renderAuth("auth-action-mobile");

  // Menu hamburguer
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("side-menu");
  const close = document.getElementById("close-menu");
  const overlay = document.getElementById("menu-overlay");

  if (toggle && menu && close && overlay) {
    toggle.addEventListener("click", () => {
      menu.classList.add("active");
      overlay.classList.add("active");
    });

    close.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

// Formulário de Sintomas
const form = document.querySelector("form#form-sintomas");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome?.value.trim();
    const sintomas = form.sintomas?.value.trim();
    const localizacao = form.localizacao?.value.trim();

    if (!nome || !sintomas || !localizacao) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Sintomas enviados com sucesso!");
    form.reset();
  });
}

// Chatbot
const chatbox = document.getElementById("chatbox");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("userInput");

if (chatbox && chatForm && userInput) {
  const perguntas = [
    "Olá! Qual o seu nome?",
    "Qual sua cidade ou bairro?",
    "Quais sintomas você está sentindo? (Ex: febre, tosse, dor de cabeça...)",
    "Há quantos dias você apresenta esses sintomas?",
    "Você autoriza o envio dessas informações ao sistema de monitoramento SINAIS? (sim/não)"
  ];

  let respostas = [];
  let etapa = 0;

  function adicionarMensagem(texto, classe) {
    const msg = document.createElement("div");
    msg.className = classe;
    msg.textContent = texto;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function iniciarChat() {
    adicionarMensagem(perguntas[etapa], "bot");
  }

  function reiniciarChat() {
    respostas = [];
    etapa = 0;
    chatbox.innerHTML = "";
    userInput.disabled = false;
    chatForm.style.display = "flex";
    iniciarChat();
  }

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = userInput.value.trim();
    if (texto === "") return;

    adicionarMensagem(texto, "user");
    respostas.push(texto);
    userInput.value = "";
    etapa++;

    setTimeout(() => {
      if (etapa < perguntas.length) {
        if (etapa === perguntas.length - 1 && !/^sim|não$/i.test(respostas[etapa - 1])) {
          etapa--;
          respostas.pop();
          adicionarMensagem("Por favor, responda apenas com 'sim' ou 'não'.", "bot");
          return;
        }
        adicionarMensagem(perguntas[etapa], "bot");
      } else {
        adicionarMensagem("Obrigado! Suas informações foram enviadas com sucesso. 💙", "bot");
        console.log("Respostas enviadas:", respostas);
        userInput.disabled = true;
        chatForm.style.display = "none";
        setTimeout(() => {
          const reiniciar = document.createElement("button");
          reiniciar.textContent = "Nova notificação";
          reiniciar.style.marginTop = "15px";
          reiniciar.onclick = reiniciarChat;
          chatbox.appendChild(reiniciar);
        }, 1000);
      }
    }, 800);
  });

  iniciarChat();
}
