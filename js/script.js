const actionButton = document.getElementById('actionButton');
const messageElement = document.getElementById('message');

actionButton.addEventListener('click', () => {
  const now = new Date();
  messageElement.textContent = `Botão clicado em ${now.toLocaleTimeString('pt-BR')}. O projeto está organizado em html/, css/ e js/.`;
});
