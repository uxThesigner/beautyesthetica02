// Page: anamnese.html (Admin - Prontuários & Anamneses)
// - Mock rico: muitos prontuários + tags variadas
// - Filtros: busca + tipo + alerta (sem backend)
(function () {
  const TOTAL_COUNT = 158;

    const SEED = [
    ['fixo', 'Beatriz Cavalcante', 'Hoje às 14:00 • Realizado por: Dra. Hillary', ['allergy:Alérgica a Ácidos', 'medication:Usa Roacutan']],
    ['visitante', 'Mariana Lima', '18/02/2026 • Realizado por: Tays Alves', ['new:Primeira Avaliação', 'gestant:Gestante (4 meses)']],
    ['visitante', 'Tainá Rodrigues', '19/02/2026 • Realizado por: Tays Alves', ['presente:Presente (voucher)']],
    ['fixo', 'Karla Nunes', '18/02/2026 • Realizado por: Dra. Hillary', ['retorno:Sem contraindicações']],
    ['fixo', 'Amanda Barreto', '17/02/2026 • Realizado por: Tays Alves', ['presente:Presente (voucher)']],
    ['fixo', 'Isabela Nunes', '16/02/2026 • Realizado por: Dra. Hillary', ['retorno:Sem contraindicações']],
    ['visitante', 'Cláudia Gomes', '15/02/2026 • Realizado por: Tays Alves', ['new:Sem contraindicações']],
    ['visitante', 'Simone Ferreira', '14/02/2026 • Realizado por: Dra. Hillary', ['presente:Presente (voucher)', 'medication:Usa Roacutan']],
    ['fixo', 'Jéssica Rocha', '13/02/2026 • Realizado por: Larissa Moura', ['new:Sem contraindicações']],
    ['fixo', 'Isabela Pires', '12/02/2026 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['fixo', 'Nathalia Carvalho', '11/02/2026 • Realizado por: Larissa Moura', ['gestant:Gestante (4 meses)']],
    ['fixo', 'Luana Duarte', '10/02/2026 • Realizado por: Larissa Moura', ['gestant:Gestante (2 meses)']],
    ['fixo', 'Sabrina Pires', '09/02/2026 • Realizado por: Hillary Vitória', ['ok:Primeira Avaliação']],
    ['fixo', 'Débora Santana', '08/02/2026 • Realizado por: Larissa Moura', ['retorno:Retorno programado', 'medication:Uso de antibiótico']],
    ['visitante', 'Aline Gomes', '07/02/2026 • Realizado por: Hillary Vitória', ['medication:Uso de antibiótico']],
    ['fixo', 'Ana Gomes', '06/02/2026 • Realizado por: Larissa Moura', ['presente:Presente (voucher)']],
    ['fixo', 'Juliana Pires', '05/02/2026 • Realizado por: Hillary Vitória', ['medication:Uso de retinoide', 'gestant:Gestante (5 meses)']],
    ['fixo', 'Letícia Carvalho', '04/02/2026 • Realizado por: Tays Alves', ['allergy:Alérgica a Ácidos']],
    ['fixo', 'Cláudia Martins', '03/02/2026 • Realizado por: Dra. Hillary', ['medication:Uso de antibiótico']],
    ['visitante', 'Bruna Vieira', '02/02/2026 • Realizado por: Dra. Hillary', ['allergy:Alérgica a Lidocaína']],
    ['visitante', 'Milena Oliveira', '01/02/2026 • Realizado por: Larissa Moura', ['ok:Sem contraindicações']],
    ['fixo', 'Manuela Andrade', '31/01/2026 • Realizado por: Dra. Hillary', ['new:Sem contraindicações']],
    ['fixo', 'Lívia Freitas', '30/01/2026 • Realizado por: Tays Alves', ['new:Sem contraindicações']],
    ['fixo', 'Cecília Costa', '29/01/2026 • Realizado por: Dra. Hillary', ['gestant:Gestante (5 meses)', 'medication:Uso de anticoagulante']],
    ['visitante', 'Irene Moura', '28/01/2026 • Realizado por: Tays Alves', ['new:Primeira Avaliação']],
    ['fixo', 'Andressa Nascimento', '27/01/2026 • Realizado por: Larissa Moura', ['medication:Uso de antibiótico']],
    ['visitante', 'Cecília Vasconcelos', '26/01/2026 • Realizado por: Tays Alves', ['ok:Primeira Avaliação']],
    ['fixo', 'Andressa Silva', '25/01/2026 • Realizado por: Larissa Moura', ['medication:Uso de retinoide']],
    ['visitante', 'Carolina Silva', '24/01/2026 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['fixo', 'Larissa Barreto', '23/01/2026 • Realizado por: Dra. Hillary', ['gestant:Gestante (4 meses)']],
    ['fixo', 'Nathalia Pires', '22/01/2026 • Realizado por: Larissa Moura', ['medication:Uso de retinoide']],
    ['visitante', 'Vanessa Vieira', '21/01/2026 • Realizado por: Larissa Moura', ['ok:Sem contraindicações']],
    ['fixo', 'Iara Santos', '20/01/2026 • Realizado por: Larissa Moura', ['ok:Sem contraindicações']],
    ['fixo', 'Eduarda Ferreira', '19/01/2026 • Realizado por: Tays Alves', ['new:Sem contraindicações']],
    ['fixo', 'Aline Moura', '18/01/2026 • Realizado por: Larissa Moura', ['ok:Sem contraindicações']],
    ['fixo', 'Sueli Carvalho', '17/01/2026 • Realizado por: Tays Alves', ['gestant:Gestante (4 meses)']],
    ['visitante', 'Priscila Vasconcelos', '16/01/2026 • Realizado por: Larissa Moura', ['retorno:Sem contraindicações']],
    ['fixo', 'Alice Santana', '15/01/2026 • Realizado por: Hillary Vitória', ['allergy:Alérgica a Lidocaína']],
    ['fixo', 'Sônia Andrade', '14/01/2026 • Realizado por: Hillary Vitória', ['ok:Sem contraindicações']],
    ['fixo', 'Elaine Teixeira', '13/01/2026 • Realizado por: Hillary Vitória', ['gestant:Gestante (2 meses)']],
    ['fixo', 'Cristina Martins', '12/01/2026 • Realizado por: Dra. Hillary', ['retorno:Sem contraindicações']],
    ['visitante', 'Nathalia Rodrigues', '11/01/2026 • Realizado por: Larissa Moura', ['retorno:Sem contraindicações']],
    ['visitante', 'Gisele Freitas', '10/01/2026 • Realizado por: Hillary Vitória', ['retorno:Retorno programado']],
    ['fixo', 'Patrícia Nascimento', '09/01/2026 • Realizado por: Larissa Moura', ['medication:Uso de anticoagulante']],
    ['fixo', 'Eduarda Nunes', '08/01/2026 • Realizado por: Dra. Hillary', ['medication:Usa Roacutan', 'new:Primeira Avaliação']],
    ['fixo', 'Beatriz Ramos', '07/01/2026 • Realizado por: Tays Alves', ['gestant:Gestante (5 meses)']],
    ['visitante', 'Giovanna Vieira', '06/01/2026 • Realizado por: Larissa Moura', ['retorno:Primeira Avaliação']],
    ['visitante', 'Yasmin Barros', '05/01/2026 • Realizado por: Dra. Hillary', ['new:Sem contraindicações']],
    ['fixo', 'Fabiana Moura', '04/01/2026 • Realizado por: Hillary Vitória', ['ok:Sem contraindicações']],
    ['visitante', 'Paula Gomes', '03/01/2026 • Realizado por: Dra. Hillary', ['ok:Sem contraindicações']],
    ['visitante', 'Vitória Almeida', '02/01/2026 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['visitante', 'Giovanna Duarte', '01/01/2026 • Realizado por: Tays Alves', ['medication:Uso de retinoide']],
    ['visitante', 'Mariana Duarte', '31/12/2025 • Realizado por: Hillary Vitória', ['presente:Presente (voucher)']],
    ['fixo', 'Mônica Barreto', '30/12/2025 • Realizado por: Larissa Moura', ['retorno:Primeira Avaliação']],
    ['visitante', 'Cláudia Cavalcante', '29/12/2025 • Realizado por: Hillary Vitória', ['medication:Usa Roacutan']],
    ['fixo', 'Patrícia Costa', '28/12/2025 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['visitante', 'Juliana Moura', '27/12/2025 • Realizado por: Tays Alves', ['medication:Usa Roacutan', 'allergy:Alérgica a Lidocaína']],
    ['fixo', 'Elaine Ferreira', '26/12/2025 • Realizado por: Hillary Vitória', ['new:Sem contraindicações']],
    ['fixo', 'Carolina Lima', '25/12/2025 • Realizado por: Tays Alves', ['gestant:Gestante (2 meses)']],
    ['fixo', 'Lívia Pires', '24/12/2025 • Realizado por: Larissa Moura', ['gestant:Gestante (2 meses)']],
    ['fixo', 'Mirela Nunes', '23/12/2025 • Realizado por: Dra. Hillary', ['new:Primeira Avaliação']],
    ['fixo', 'Irene Duarte', '22/12/2025 • Realizado por: Dra. Hillary', ['new:Primeira Avaliação']],
    ['fixo', 'Camila Barros', '21/12/2025 • Realizado por: Dra. Hillary', ['gestant:Gestante (5 meses)', 'allergy:Alérgica a Perfumes']],
    ['fixo', 'Camila Ramos', '20/12/2025 • Realizado por: Tays Alves', ['new:Primeira Avaliação']],
    ['fixo', 'Sueli Santos', '19/12/2025 • Realizado por: Larissa Moura', ['medication:Uso de antibiótico']],
    ['visitante', 'Roberta Costa', '18/12/2025 • Realizado por: Larissa Moura', ['medication:Uso de anticoagulante']],
    ['visitante', 'Eduarda Duarte', '17/12/2025 • Realizado por: Hillary Vitória', ['gestant:Gestante (5 meses)']],
    ['visitante', 'Yasmin Teixeira', '16/12/2025 • Realizado por: Tays Alves', ['ok:Sem contraindicações']],
    ['fixo', 'Cláudia Duarte', '15/12/2025 • Realizado por: Dra. Hillary', ['gestant:Gestante (2 meses)']],
    ['visitante', 'Mirela Pires', '14/12/2025 • Realizado por: Dra. Hillary', ['allergy:Alérgica a Lidocaína']],
    ['visitante', 'Paula Pires', '13/12/2025 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['fixo', 'Paula Vieira', '12/12/2025 • Realizado por: Dra. Hillary', ['new:Primeira Avaliação']],
    ['fixo', 'Elaine Costa', '11/12/2025 • Realizado por: Larissa Moura', ['presente:Presente (voucher)']],
    ['visitante', 'Andressa Ribeiro', '10/12/2025 • Realizado por: Dra. Hillary', ['allergy:Alérgica a Perfumes']],
    ['fixo', 'Alessandra Duarte', '09/12/2025 • Realizado por: Dra. Hillary', ['medication:Usa Roacutan']],
    ['fixo', 'Fabiana Souza', '08/12/2025 • Realizado por: Dra. Hillary', ['retorno:Primeira Avaliação']],
    ['fixo', 'Jéssica Cavalcante', '07/12/2025 • Realizado por: Tays Alves', ['ok:Sem contraindicações']],
    ['visitante', 'Fabiana Freitas', '06/12/2025 • Realizado por: Dra. Hillary', ['new:Primeira Avaliação']],
    ['fixo', 'Paula Lima', '05/12/2025 • Realizado por: Dra. Hillary', ['ok:Sem contraindicações']],
    ['visitante', 'Vanessa Martins', '04/12/2025 • Realizado por: Tays Alves', ['medication:Uso de anticoagulante']],
    ['fixo', 'Lívia Almeida', '03/12/2025 • Realizado por: Larissa Moura', ['ok:Sem contraindicações']],
    ['visitante', 'Nathalia Almeida', '02/12/2025 • Realizado por: Tays Alves', ['retorno:Primeira Avaliação']],
    ['fixo', 'Isadora Vasconcelos', '01/12/2025 • Realizado por: Dra. Hillary', ['medication:Uso de retinoide']],
    ['visitante', 'Vanessa Carvalho', '30/11/2025 • Realizado por: Tays Alves', ['allergy:Alérgica a Lidocaína']],
    ['visitante', 'Patrícia Araújo', '29/11/2025 • Realizado por: Dra. Hillary', ['medication:Uso de retinoide']],
    ['fixo', 'Eduarda Pereira', '28/11/2025 • Realizado por: Tays Alves', ['retorno:Sem contraindicações']],
    ['fixo', 'Helena Duarte', '27/11/2025 • Realizado por: Tays Alves', ['allergy:Alérgica a Ácidos']],
    ['fixo', 'Evelyn Oliveira', '26/11/2025 • Realizado por: Tays Alves', ['new:Primeira Avaliação']],
    ['visitante', 'Tays Costa', '25/11/2025 • Realizado por: Tays Alves', ['ok:Sem contraindicações']],
    ['fixo', 'Talita Araújo', '24/11/2025 • Realizado por: Larissa Moura', ['new:Sem contraindicações']],
    ['visitante', 'Sabrina Cavalcante', '23/11/2025 • Realizado por: Larissa Moura', ['new:Sem contraindicações']],
    ['fixo', 'Fernanda Ferreira', '22/11/2025 • Realizado por: Dra. Hillary', ['new:Primeira Avaliação']],
    ['fixo', 'Ana Costa', '21/11/2025 • Realizado por: Larissa Moura', ['gestant:Gestante (2 meses)']],
    ['fixo', 'Carolina Almeida', '20/11/2025 • Realizado por: Hillary Vitória', ['ok:Primeira Avaliação']],
    ['visitante', 'Cíntia Ferreira', '19/11/2025 • Realizado por: Dra. Hillary', ['ok:Primeira Avaliação']],
    ['fixo', 'Alessandra Vieira', '18/11/2025 • Realizado por: Hillary Vitória', ['new:Primeira Avaliação', 'allergy:Alérgica a Lidocaína']],
    ['fixo', 'Beatriz Vasconcelos', '17/11/2025 • Realizado por: Dra. Hillary', ['presente:Presente (voucher)']],
    ['fixo', 'Carla Vasconcelos', '16/11/2025 • Realizado por: Hillary Vitória', ['medication:Uso de antibiótico']],
  ];

  function initials(name) {
    const parts = (name || '').trim().split(/\s+/).filter(Boolean);
    const a = parts[0] ? parts[0][0] : 'C';
    const b = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (a + b).toUpperCase();
  }

  function tagHtml(tagKey, label) {
    const key = (tagKey || '').toLowerCase();
    if (key === 'allergy') return `<span class="tag tag-allergy" data-tag="allergy"><i class="fas fa-exclamation-triangle"></i> ${label}</span>`;
    if (key === 'gestant') return `<span class="tag tag-gestant" data-tag="gestant">${label}</span>`;
    if (key === 'medication') return `<span class="tag tag-medication" data-tag="medication">${label}</span>`;
    if (key === 'new') return `<span class="tag tag-new" data-tag="new">${label}</span>`;
    if (key === 'retorno') return `<span class="tag tag-new" data-tag="retorno" style="background:#e7f5ff;color:#1c7ed6;">${label}</span>`;
    if (key === 'presente') return `<span class="tag tag-new" data-tag="presente" style="background:#f3f0ff;color:#5f3dc4;">${label}</span>`;
    if (key === 'ok') return `<span style="color:#2ecc71;font-size:0.7rem;font-weight:600;" data-tag="ok"><i class="fas fa-check-circle"></i> ${label}</span>`;
    return `<span class="tag tag-new" data-tag="${key}">${label}</span>`;
  }

  function buildCard(type, name, meta, tags) {
    const init = initials(name);
    const isFixo = type === 'fixo';
    const badgeText = isFixo ? 'CLIENTE FIXO' : 'VISITANTE PRESENCIAL';
    const initBg = isFixo ? 'var(--color-marquee)' : '#eee';
    const initColor = isFixo ? 'var(--color-primary)' : '#999';

    const tagPairs = (tags || []).map((t) => {
      const [k, lbl] = t.split(':');
      return { k, lbl };
    });

    const tagsHtml = tagPairs.map(tp => tagHtml(tp.k, tp.lbl)).join('');

    const tagsForFilter = tagPairs.map(tp => tp.k).join(',');

    return `
      <div class="anamnese-card" data-type="${type}" data-tags="${tagsForFilter}">
        <div class="client-initials" style="width:50px;height:50px;background:${initBg};border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;color:${initColor};">${init}</div>
        <div class="client-info">
          <span class="type-badge">${badgeText}</span>
          <h3>${name}</h3>
          <p class="client-meta">Última atualização: ${meta}</p>
          <div class="tag-container">${tagsHtml}</div>
        </div>
        <div class="actions">
          <button class="btn-view" title="Imprimir PDF"><i class="fas fa-print"></i></button>
          <button class="btn-view" data-go-to="avaliacao.html">VER FICHA</button>
        </div>
      </div>
    `;
  }

  function seedCards() {
    const container = document.getElementById('listContainer');
    if (!container) return;

    // Evita duplicação (caso de hot-reload)
    if (container.getAttribute('data-seeded') === '1') return;
    container.setAttribute('data-seeded', '1');

    const html = SEED.map((s) => buildCard(s[0], s[1], s[2], s[3])).join('');
    container.insertAdjacentHTML('beforeend', html);
  }

  function applyFilters() {
    const term = (document.getElementById('searchName')?.value || '').toLowerCase().trim();
    const type = document.getElementById('filterType')?.value || 'all';
    const tag = document.getElementById('filterTag')?.value || 'all';

    let shown = 0;

    document.querySelectorAll('.anamnese-card').forEach((card) => {
      const nameEl = card.querySelector('h3');
      const name = (nameEl ? nameEl.innerText : '').toLowerCase();
      const meta = (card.querySelector('.client-meta')?.innerText || '').toLowerCase();

      const cardType = (card.getAttribute('data-type') || 'fixo').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();

      const okTerm = !term || name.includes(term) || meta.includes(term);
      const okType = type === 'all' || cardType === type;
      const okTag = tag === 'all' || tags.includes(tag);

      const visible = okTerm && okType && okTag;
      card.style.display = visible ? 'grid' : 'none';
      if (visible) shown += 1;
    });

    const shownEl = document.getElementById('shownCount');
    const totalEl = document.getElementById('totalCount');
    if (shownEl) shownEl.textContent = String(shown);
    if (totalEl) totalEl.textContent = String(TOTAL_COUNT);
  }

  function wire() {
    const input = document.getElementById('searchName');
    if (input) input.addEventListener('input', applyFilters);

    const filterType = document.getElementById('filterType');
    if (filterType) filterType.addEventListener('change', applyFilters);

    const filterTag = document.getElementById('filterTag');
    if (filterTag) filterTag.addEventListener('change', applyFilters);

    document.querySelectorAll('[data-go-to]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-go-to');
        if (url) window.location.href = url;
      });
    });

    document.querySelectorAll('.btn-view[title="Imprimir PDF"]').forEach((btn) => {
      btn.addEventListener('click', () => window.print());
    });
  }

  function init() {
    seedCards();
    wire();
    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
