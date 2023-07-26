document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  
    // Call the function to set the site info with the JSON data from data.js
    setSiteInfo(jsonData);
  });
  
  function setSiteInfo(data) {
    // Definindo a imagem de perfil
    const imagemPerfil = document.querySelector("img[alt='Imagem de Perfil']");
    imagemPerfil.src = data.imagem_perfil;
  
    // Definindo o nome
    const nomeElement = document.querySelector("h1");
    nomeElement.textContent = data.nome;
  
    // Definindo a descrição da profissao
    const descricaoProfissao = document.querySelector(".header-info p");
    descricaoProfissao.textContent = data.profissao;
  
    // Definindo links das redes sociais
    const githubLink = document.querySelector(".social-links a[href^='https://github.com']");
    githubLink.href = data.redes_sociais.github;
  
    const linkedinLink = document.querySelector(".social-links a[href^='https://www.linkedin.com']");
    linkedinLink.href = data.redes_sociais.linkedin;
  }
  