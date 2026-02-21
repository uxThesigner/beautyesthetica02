// Page: crm.html (Admin/Staff - Gestão de Clientes)
// - Mock rico: muitos clientes + tags variadas
// - Tabela rolável no mobile (CSS)
// - Busca client-side (nome/CPF/telefone/plano/tags)
(function () {
  const CLIENTS = [
    // name, cpf, phone, club, lastVisit, tags[]
    ['Beatriz Cavalcante', '000.000.000-00', '(79) 99999-0000', 'VIP GOLD', '15/02/2026', ['club', 'retorno']],
    ['Mariana Lima', '111.111.111-11', '(79) 98888-1111', 'NÃO ASSINANTE', '20/01/2026', ['presencial']],
    ['Juliana Ramos', '222.222.222-22', '(79) 97777-2222', 'VIP GOLD', '10/01/2026', ['club']],
    ['Fernanda Oliveira', '333.333.333-33', '(79) 96666-3333', 'BASIC CARE', '18/02/2026', ['novo']],
    ['Camila Santos', '444.444.444-44', '(79) 95555-4444', 'VIP GOLD', '05/02/2026', ['club', 'presente']],
    ['Aline Barros', '555.555.555-55', '(79) 94444-5555', 'BASIC CARE', '12/02/2026', ['club']],
    ['Tainá Moreira', '666.666.666-66', '(79) 93333-6666', 'NÃO ASSINANTE', '22/12/2025', ['cancelado']],
    ['Patrícia Nunes', '777.777.777-77', '(79) 92222-7777', 'VIP GOLD', '02/02/2026', ['retorno']],
    ['Rafaela Costa', '888.888.888-88', '(79) 91111-8888', 'BASIC CARE', '28/01/2026', ['club']],
    ['Bianca Souza', '999.999.999-99', '(79) 90000-9999', 'VIP GOLD', '17/02/2026', ['club']],
    ['Nathalia Ribeiro', '101.101.101-10', '(79) 99911-1010', 'NÃO ASSINANTE', '08/01/2026', ['presencial']],
    ['Isabela Ferreira', '202.202.202-20', '(79) 99922-2020', 'BASIC CARE', '09/02/2026', ['club']],
    ['Gisele Araújo', '303.303.303-30', '(79) 99933-3030', 'VIP GOLD', '13/02/2026', ['club', 'retorno']],
    ['Paula Mendes', '404.404.404-40', '(79) 99944-4040', 'VIP GOLD', '19/02/2026', ['club', 'presente']],
    ['Renata Dias', '505.505.505-50', '(79) 99955-5050', 'NÃO ASSINANTE', '11/01/2026', ['novo']],
    ['Carolina Rocha', '606.606.606-60', '(79) 99966-6060', 'BASIC CARE', '24/01/2026', ['club']],
    ['Amanda Silva', '707.707.707-70', '(79) 99977-7070', 'VIP GOLD', '16/02/2026', ['club']],
    ['Eduarda Gomes', '808.808.808-80', '(79) 99988-8080', 'NÃO ASSINANTE', '29/12/2025', ['presencial']],
    ['Letícia Pereira', '909.909.909-90', '(79) 99999-9090', 'VIP GOLD', '03/02/2026', ['club']],
    ['Bruna Martins', '121.212.121-21', '(79) 98877-1212', 'BASIC CARE', '14/02/2026', ['club', 'retorno']],
    ['Ana Clara', '131.313.131-31', '(79) 97766-1313', 'NÃO ASSINANTE', '06/01/2026', ['cancelado']],
    ['Sabrina Almeida', '141.414.141-41', '(79) 96655-1414', 'VIP GOLD', '17/01/2026', ['club']],
    ['Carla Menezes', '151.515.151-51', '(79) 95544-1515', 'BASIC CARE', '07/02/2026', ['club']],
    ['Giovanna Freitas', '161.616.161-61', '(79) 94433-1616', 'NÃO ASSINANTE', '30/01/2026', ['presencial']],
    ['Lívia Carvalho', '171.717.171-71', '(79) 93322-1717', 'VIP GOLD', '01/02/2026', ['club', 'presente']],
    ['Mirela Teixeira', '181.818.181-81', '(79) 92211-1818', 'BASIC CARE', '15/01/2026', ['club']],
    ['Thais Alves', '191.919.191-91', '(79) 91100-1919', 'VIP GOLD', '18/02/2026', ['club']],
    ['Jéssica Rocha', '212.121.212-12', '(79) 90099-2121', 'NÃO ASSINANTE', '12/12/2025', ['cancelado']],
    ['Priscila Vieira', '232.323.232-32', '(79) 90088-2323', 'VIP GOLD', '09/01/2026', ['retorno']],
    ['Larissa Moura', '242.424.242-42', '(79) 90077-2424', 'BASIC CARE', '05/02/2026', ['club']],
    ['Tays Alves', '252.525.252-52', '(79) 90066-2525', 'NÃO ASSINANTE', '27/01/2026', ['presencial']],
    ['Hillary Vitória', '262.626.262-62', '(79) 90055-2626', 'VIP GOLD', '19/02/2026', ['club']],
    ['Alessandra Lima', '272.727.272-72', '(79) 90044-2727', 'BASIC CARE', '10/02/2026', ['club', 'retorno']],
    ['Vitória Santos', '282.828.282-82', '(79) 90033-2828', 'VIP GOLD', '08/02/2026', ['club']],
    ['Sueli Nascimento', '292.929.292-92', '(79) 90022-2929', 'NÃO ASSINANTE', '03/01/2026', ['novo']],
    ['Flávia Andrade', '313.131.313-13', '(79) 90011-3131', 'BASIC CARE', '02/02/2026', ['club']],
    ['Vanessa Barreto', '323.232.323-23', '(79) 98800-3232', 'VIP GOLD', '06/02/2026', ['club', 'presente']],
    ['Débora Pires', '343.434.343-43', '(79) 97700-3434', 'NÃO ASSINANTE', '28/11/2025', ['cancelado']],
    ['Mônica Lima', '353.535.353-53', '(79) 96600-3535', 'BASIC CARE', '11/02/2026', ['club']],
    ['Sônia Ribeiro', '363.636.363-63', '(79) 95500-3636', 'VIP GOLD', '15/02/2026', ['club']],
    ['Helena Duarte', '373.737.373-73', '(79) 94400-3737', 'NÃO ASSINANTE', '07/01/2026', ['presencial']],
    ['Caroline Silva', '383.838.383-83', '(79) 93300-3838', 'BASIC CARE', '04/02/2026', ['club']],
    ['Talita Rocha', '393.939.393-93', '(79) 92200-3939', 'VIP GOLD', '18/01/2026', ['retorno']],
    ['Simone Costa', '414.141.414-14', '(79) 91110-4141', 'NÃO ASSINANTE', '23/12/2025', ['presencial']],
    ['Iara Martins', '424.242.424-24', '(79) 90010-4242', 'BASIC CARE', '01/02/2026', ['club']],
    ['Evelyn Araujo', '434.343.434-34', '(79) 90020-4343', 'VIP GOLD', '13/02/2026', ['club', 'retorno']],
    ['Natália Souza', '444.545.646-54', '(79) 90030-4444', 'BASIC CARE', '09/02/2026', ['club']],
    ['Renata Vasconcelos', '454.545.454-54', '(79) 90040-4545', 'VIP GOLD', '12/02/2026', ['club']],
    ['Cíntia Lima', '464.646.464-64', '(79) 90050-4646', 'NÃO ASSINANTE', '29/01/2026', ['novo']],
    ['Karla Santana', '474.747.474-74', '(79) 90060-4747', 'BASIC CARE', '10/01/2026', ['club']],
  ];

  function initials(name) {
    const parts = (name || '').trim().split(/\s+/).filter(Boolean);
    const a = parts[0] ? parts[0][0] : 'C';
    const b = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (a + b).toUpperCase();
  }

  function clubCell(club) {
    const c = (club || '').toUpperCase();
    if (c.includes('VIP')) return `<span class="badge-club"><i class="fas fa-crown"></i> ${club}</span>`;
    if (c.includes('BASIC')) return `<span class="badge-club" style="background:#e7f5ff;color:#1c7ed6;"><i class="fas fa-star"></i> ${club}</span>`;
    return `<span style="font-size:0.75rem;color:#aaa;font-weight:700;">NÃO ASSINANTE</span>`;
  }

  function rowHtml(c) {
    const [name, cpf, phone, club, lastVisit] = c;
    const init = initials(name);
    return `
      <tr>
        <td>
          <div style="display:flex;align-items:center;">
            <div class="client-avatar">${init}</div>
            <div>
              <strong>${name}</strong><br>
              <small style="color:#999;">CPF: ${cpf}</small>
            </div>
          </div>
        </td>
        <td>${phone}</td>
        <td>${clubCell(club)}</td>
        <td>${lastVisit}</td>
        <td class="action-icons">
          <a href="#" class="btn-icon" title="Ver Histórico"><i class="fas fa-history"></i></a>
          <a href="#" class="btn-icon" title="Ficha de Anamnese"><i class="fas fa-notes-medical"></i></a>
          <a href="#" class="btn-icon" title="Editar"><i class="fas fa-edit"></i></a>
        </td>
      </tr>`;
  }

  function renderRows(list) {
    const tbody = document.getElementById('crm-tbody');
    if (!tbody) return;
    tbody.innerHTML = list.map(rowHtml).join('');
  }

  function wireSearch() {
    const input = document.querySelector('.search-box input');
    const tbody = document.getElementById('crm-tbody');
    if (!input || !tbody) return;

    input.addEventListener('input', () => {
      const term = (input.value || '').toLowerCase();
      const rows = tbody.querySelectorAll('tr');
      rows.forEach((tr) => {
        const txt = (tr.innerText || '').toLowerCase();
        tr.style.display = txt.includes(term) ? '' : 'none';
      });
    });
  }

  function init() {
    renderRows(CLIENTS);
    wireSearch();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
