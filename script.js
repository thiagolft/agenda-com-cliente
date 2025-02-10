/*
  script.js
  Script para manipulação da navegação entre telas e redirecionamento de links.
*/

/**
 * Alterna a exibição entre as telas.
 * @param {string} sectionId - ID da seção a ser exibida.
 */
function showSection(sectionId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  /**
   * Abre o link informado em uma nova aba.
   * @param {string} url - URL a ser aberta.
   */
  function openLink(url) {
    window.open(url, "_blank");
  }
  