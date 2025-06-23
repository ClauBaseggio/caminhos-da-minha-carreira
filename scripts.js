fetch('projetos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projetos-container');
    data.forEach(projeto => {
      const card = document.createElement('div');
      card.className = 'projeto-card';
      card.innerHTML = `
        <h2>${projeto.nome}</h2>
        <p><strong>Área:</strong> ${projeto.area}</p>
        <p><strong>Descrição:</strong> ${projeto.descricao}</p>
        <p><strong>Período:</strong> ${projeto.inicio} até ${projeto.fim || 'presente'}</p>
      `;
      container.appendChild(card);
    });
  });
