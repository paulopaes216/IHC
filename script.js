function login() {
  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("feedback");

  // Usuário e senha
  const fakeUser = "cliente123";
  const fakePassword = "123456";

  if (user === "" || password === "") {
    feedback.style.color = "red";
    feedback.textContent = "Preencha todos os campos.";
    return;
  }

  if (user === fakeUser && password === fakePassword) {
    feedback.style.color = "green";
    feedback.textContent = "Login realizado com sucesso!";
  } else {
    feedback.style.color = "red";
    feedback.textContent = "Usuário ou senha incorretos.";
  }
}
