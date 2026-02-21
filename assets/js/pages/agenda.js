// Page: agenda.html (Admin/Staff)
// - Agenda rica (mock): muitos atendimentos + tags variadas
// - Inclui datas passadas e futuras (navegação Prev/Next/Hoje)
// - Filtro por profissional
(function () {
  const BASE_DATE = new Date(2026, 1, 19); // 19/02/2026

  const BASE_APPOINTMENTS = [
    // time, client, procedure, prof, status, tags
    ['08:00', 'Beatriz Cavalcante', 'Limpeza de Pele', 'Hillary', 'feito', ['club']],
    ['08:15', 'Mariana Lima', 'Peeling de Diamante', 'Tays', 'agendado', ['novo']],
    ['08:30', 'Juliana Ramos', 'Depilação Laser (Axila)', 'Hillary', 'feito', ['retorno']],
    ['08:45', 'Fernanda Oliveira', 'Microagulhamento', 'Tays', 'aguardando', []],
    ['09:00', 'Camila Santos', 'Drenagem Linfática', 'Hillary', 'feito', []],
    ['09:15', 'Aline Barros', 'Clareamento Facial', 'Larissa', 'agendado', ['club']],
    ['09:30', 'Tainá Moreira', 'Massagem Relaxante', 'Hillary', 'cancelado', ['cancelado']],
    ['09:45', 'Patrícia Nunes', 'Peeling Químico', 'Tays', 'agendado', []],
    ['10:00', 'Rafaela Costa', 'Limpeza de Pele Profunda', 'Hillary', 'feito', ['presente']],
    ['10:15', 'Bianca Souza', 'Enzimas (Gordura Localizada)', 'Larissa', 'aguardando', []],
    ['10:30', 'Larissa Moura', 'Jato de Plasma', 'Tays', 'agendado', ['retorno']],
    ['10:45', 'Sabrina Almeida', 'Bioestimulador', 'Hillary', 'agendado', ['club']],
    ['11:00', 'Mariana Silva', 'Peeling Químico', 'Tays', 'feito', []],
    ['11:15', 'Nathalia Ribeiro', 'Depilação Laser (Virilha)', 'Larissa', 'agendado', []],
    ['11:30', 'Isabela Ferreira', 'Massagem Modeladora', 'Hillary', 'aguardando', ['retorno']],
    ['11:45', 'Gisele Araújo', 'Drenagem Linfática', 'Tays', 'feito', []],
    ['12:00', 'Paula Mendes', 'Limpeza de Pele', 'Hillary', 'feito', ['club']],
    ['12:15', 'Renata Dias', 'Clareamento', 'Larissa', 'agendado', []],
    ['12:30', 'Carolina Rocha', 'Peeling de Diamante', 'Tays', 'aguardando', []],
    ['12:45', 'Vitória Lima', 'Microagulhamento', 'Hillary', 'cancelado', ['cancelado']],
    ['13:00', 'Ana Clara', 'Depilação Laser (Perna)', 'Larissa', 'agendado', []],
    ['13:15', 'Bruna Martins', 'Drenagem', 'Hillary', 'feito', ['retorno']],
    ['13:30', 'Letícia Pereira', 'Massagem Relaxante', 'Tays', 'aguardando', []],
    ['13:45', 'Eduarda Gomes', 'Limpeza de Pele Profunda', 'Hillary', 'agendado', ['novo']],
    ['14:00', 'Juliana Costa', 'Peeling Químico', 'Larissa', 'feito', []],
    ['14:15', 'Amanda Silva', 'Enzimas', 'Tays', 'agendado', []],
    ['14:30', 'Beatriz Cavalcante', 'Retorno (Avaliação)', 'Hillary', 'feito', ['retorno', 'club']],
    ['14:45', 'Mariana Lima', 'Avaliação Gratuita', 'Tays', 'agendado', ['novo']],
    ['15:00', 'Camila Santos', 'Massagem Modeladora', 'Hillary', 'aguardando', []],
    ['15:15', 'Aline Barros', 'Jato de Plasma', 'Larissa', 'feito', ['club']],
    ['15:30', 'Tainá Moreira', 'Clareamento Facial', 'Tays', 'agendado', []],
    ['15:45', 'Patrícia Nunes', 'Peeling de Diamante', 'Hillary', 'feito', []],
    ['16:00', 'Rafaela Costa', 'Microagulhamento', 'Tays', 'aguardando', ['retorno']],
    ['16:15', 'Bianca Souza', 'Drenagem', 'Hillary', 'feito', []],
    ['16:30', 'Larissa Moura', 'Limpeza de Pele', 'Larissa', 'agendado', []],
    ['16:45', 'Sabrina Almeida', 'Bioestimulador', 'Hillary', 'agendado', ['club']],
    ['17:00', 'Mariana Silva', 'Depilação Laser (Abdômen)', 'Tays', 'feito', []],
    ['17:15', 'Nathalia Ribeiro', 'Enzimas', 'Larissa', 'aguardando', []],
    ['17:30', 'Isabela Ferreira', 'Massagem Relaxante', 'Hillary', 'agendado', ['presente']],
    ['17:45', 'Gisele Araújo', 'Avaliação Gratuita', 'Tays', 'agendado', ['novo']],
    ['18:00', 'Paula Mendes', 'Clareamento', 'Larissa', 'feito', ['club']],
    ['18:15', 'Renata Dias', 'Peeling Químico', 'Hillary', 'aguardando', []],
    ['18:30', 'Carolina Rocha', 'Limpeza de Pele Profunda', 'Tays', 'agendado', []],
    ['18:45', 'Vitória Lima', 'Drenagem', 'Larissa', 'feito', []],
    ['19:00', 'Ana Clara', 'Microagulhamento', 'Hillary', 'agendado', []],
    ['19:15', 'Bruna Martins', 'Peeling de Diamante', 'Tays', 'feito', ['retorno']],
    ['19:30', 'Letícia Pereira', 'Massagem Modeladora', 'Larissa', 'aguardando', []],
    ['19:45', 'Eduarda Gomes', 'Depilação Laser (Rosto)', 'Hillary', 'agendado', ['club']],
    ['20:00', 'Juliana Costa', 'Avaliação Gratuita', 'Tays', 'agendado', ['novo']],
    ['20:15', 'Amanda Silva', 'Retorno (Pós-procedimento)', 'Larissa', 'feito', ['retorno']],
  ];

  function iso(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function addDays(d, n) {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  }

  const WEEKDAYS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  function label(d) {
    return `${WEEKDAYS[d.getDay()]}, ${d.getDate()} de ${MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
  }

  function statusMeta(status) {
    switch (status) {
      case 'feito':
        return { icon: 'fa-check-circle', color: '#2ecc71', border: '#2ecc71', title: 'Feito' };
      case 'aguardando':
        return { icon: 'fa-clock', color: '#f39c12', border: 'var(--color-accent)', title: 'Aguardando' };
      case 'cancelado':
        return { icon: 'fa-circle-xmark', color: '#fa5252', border: '#fa5252', title: 'Cancelado' };
      case 'agendado':
      default:
        return { icon: 'fa-calendar-check', color: 'var(--color-primary)', border: 'var(--color-primary)', title: 'Agendado' };
    }
  }

  function tagToBadge(tag) {
    const t = (tag || '').toLowerCase();
    if (t === 'club') return '<span class="badge-tag tag-club">CLUB</span>';
    if (t === 'retorno') return '<span class="badge-tag tag-retorno">RETORNO</span>';
    if (t === 'presente') return '<span class="badge-tag tag-presente">PRESENTE</span>';
    if (t === 'novo') return '<span class="badge-tag tag-novo">NOVO</span>';
    if (t === 'cancelado') return '<span class="badge-tag tag-cancelado">CANCELADO</span>';
    return '';
  }

  // Cria variações para datas passadas/futuras a partir do base
  function variantForDate(offsetDays) {
    const list = BASE_APPOINTMENTS.map((a) => a.slice());
    // Datas passadas: mais "feito"; futuras: mais "agendado/aguardando"
    list.forEach((row, idx) => {
      const status = row[4];
      if (offsetDays < 0) {
        // passado
        if (status === 'agendado' || status === 'aguardando') row[4] = (idx % 5 === 0) ? 'cancelado' : 'feito';
      } else if (offsetDays > 0) {
        // futuro
        if (status === 'feito') row[4] = (idx % 3 === 0) ? 'aguardando' : 'agendado';
        if (row[5] && row[5].includes('presente') && idx % 4 === 0) row[5] = ['novo'];
      }
      // pequenas mudanças de tags para dinamismo
      if (idx % 9 === 0 && row[5]) row[5] = Array.from(new Set([...(row[5] || []), 'retorno']));
    });

    // "limpa" alguns horários para dar respiro (parece real)
    return list.filter((_, i) => (offsetDays < 0 ? i % 4 !== 0 : i % 6 !== 0));
  }

  const DATASET = {};
  // 5 dias ao redor da base
  [-2, -1, 0, 1, 2].forEach((off) => {
    DATASET[iso(addDays(BASE_DATE, off))] = variantForDate(off);
  });

  let currentDate = new Date(BASE_DATE);

  function currentList() {
    const key = iso(currentDate);
    return DATASET[key] || DATASET[iso(BASE_DATE)] || [];
  }

  function applyProfessionalFilter(list) {
    const sel = document.getElementById('agenda-prof-filter');
    const value = sel ? (sel.value || '') : '';
    if (!value || value.toLowerCase().includes('todas')) return list;

    const v = value.toLowerCase();
    return list.filter((row) => (row[3] || '').toLowerCase().includes(v.split(' ')[0]));
  }

  function render() {
    const grid = document.getElementById('agenda-grid');
    const labelEl = document.getElementById('agenda-date-label');
    if (labelEl) labelEl.textContent = label(currentDate);
    if (!grid) return;

    const list = applyProfessionalFilter(currentList());

    const html = list.map(([time, client, procedure, prof, status, tags]) => {
      const meta = statusMeta(status);
      const tagHtml = (tags || []).map(tagToBadge).filter(Boolean).join(' ');

      return `
        <div class="agenda-row">
          <div class="time-slot">${time}</div>
          <div class="appointment-slot">
            <div class="appointment-card" style="border-left-color: ${meta.border};">
              <div class="app-info">
                <h4>${client}</h4>
                <span>${procedure} • <span class="badge-prof">${prof}</span>${tagHtml ? ' • ' + tagHtml : ''}</span>
              </div>
              <div class="app-status" title="${meta.title}"><i class="fas ${meta.icon}" style="color: ${meta.color};"></i></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.innerHTML = html;
  }

  function wire() {
    const prev = document.querySelector('[data-nav="prev"]');
    const next = document.querySelector('[data-nav="next"]');
    const today = document.getElementById('agenda-btn-today');
    const prof = document.getElementById('agenda-prof-filter');

    if (prev) prev.addEventListener('click', () => { currentDate = addDays(currentDate, -1); render(); });
    if (next) next.addEventListener('click', () => { currentDate = addDays(currentDate, 1); render(); });
    if (today) today.addEventListener('click', () => { currentDate = new Date(BASE_DATE); render(); });
    if (prof) prof.addEventListener('change', render);
  }

  function init() {
    wire();
    render();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
