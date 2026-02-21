// Page: beauty.html (Admin - Gestão Beauty Club)
// - Mock rico: muitos assinantes (para demonstrar dinamismo)
// - Busca client-side por qualquer texto
(function () {
    const SUBS = [
    ['Beatriz Cavalcante', 'asaas_92837', 'VIP Gold', 'R$ 199,90', '10/03/2026', 'active'],
    ['Mariana Lima', 'asaas_11223', 'Basic Care', 'R$ 99,90', '05/02/2026', 'overdue'],
    ['Fernanda Oliveira', 'asaas_33110', 'VIP Gold', 'R$ 199,90', '12/03/2026', 'active'],
    ['Camila Santos', 'asaas_44521', 'Basic Care', 'R$ 99,90', '08/03/2026', 'pending'],
    ['Aline Barros', 'asaas_55219', 'VIP Gold', 'R$ 199,90', '11/03/2026', 'active'],
    ['Patrícia Nunes', 'asaas_66318', 'Basic Care', 'R$ 99,90', '01/03/2026', 'active'],
    ['Rafaela Costa', 'asaas_77417', 'VIP Gold', 'R$ 199,90', '27/02/2026', 'pending'],
    ['Bianca Souza', 'asaas_88516', 'VIP Gold', 'R$ 199,90', '20/02/2026', 'overdue'],
    ['Nathalia Ribeiro', 'asaas_99615', 'Basic Care', 'R$ 99,90', '18/03/2026', 'active'],
    ['Isabela Ferreira', 'asaas_10714', 'VIP Gold', 'R$ 199,90', '16/03/2026', 'active'],
    ['Gisele Araújo', 'asaas_11813', 'Basic Care', 'R$ 99,90', '15/03/2026', 'pending'],
    ['Paula Mendes', 'asaas_12912', 'VIP Gold', 'R$ 199,90', '14/03/2026', 'active'],
    ['Renata Dias', 'asaas_13111', 'Basic Care', 'R$ 99,90', '13/03/2026', 'active'],
    ['Carolina Rocha', 'asaas_14110', 'VIP Gold', 'R$ 199,90', '12/02/2026', 'overdue'],
    ['Amanda Silva', 'asaas_15109', 'Basic Care', 'R$ 99,90', '05/03/2026', 'pending'],
    ['Eduarda Gomes', 'asaas_16108', 'VIP Gold', 'R$ 199,90', '06/03/2026', 'active'],
    ['Letícia Pereira', 'asaas_17107', 'Basic Care', 'R$ 99,90', '07/03/2026', 'active'],
    ['Bruna Martins', 'asaas_18106', 'VIP Gold', 'R$ 199,90', '08/03/2026', 'pending'],
    ['Ana Clara', 'asaas_19105', 'Basic Care', 'R$ 99,90', '09/03/2026', 'active'],
    ['Sabrina Almeida', 'asaas_20104', 'VIP Gold', 'R$ 199,90', '10/03/2026', 'active'],
    ['Larissa Moura', 'asaas_21103', 'Basic Care', 'R$ 99,90', '11/03/2026', 'pending'],
    ['Tays Alves', 'asaas_22102', 'VIP Gold', 'R$ 199,90', '12/03/2026', 'active'],
    ['Hillary Vitória', 'asaas_23101', 'VIP Gold', 'R$ 199,90', '13/03/2026', 'active'],
    ['Alessandra Lima', 'asaas_24100', 'Basic Care', 'R$ 99,90', '14/03/2026', 'pending'],
    ['Vitória Santos', 'asaas_25099', 'VIP Gold', 'R$ 199,90', '15/03/2026', 'active'],
    ['Sueli Nascimento', 'asaas_26098', 'Basic Care', 'R$ 99,90', '16/03/2026', 'active'],
    ['Flávia Andrade', 'asaas_27097', 'VIP Gold', 'R$ 199,90', '17/03/2026', 'pending'],
    ['Vanessa Barreto', 'asaas_28096', 'VIP Gold', 'R$ 199,90', '18/03/2026', 'active'],
    ['Débora Pires', 'asaas_29095', 'Basic Care', 'R$ 99,90', '19/03/2026', 'active'],
    ['Mônica Lima', 'asaas_30094', 'VIP Gold', 'R$ 199,90', '20/03/2026', 'pending'],
    ['Sônia Ribeiro', 'asaas_31093', 'Basic Care', 'R$ 99,90', '21/03/2026', 'active'],
    ['Helena Duarte', 'asaas_32092', 'VIP Gold', 'R$ 199,90', '22/03/2026', 'active'],
    ['Caroline Silva', 'asaas_33091', 'Basic Care', 'R$ 99,90', '23/03/2026', 'pending'],
    ['Talita Rocha', 'asaas_34090', 'VIP Gold', 'R$ 199,90', '24/03/2026', 'active'],
    ['Mônica Santana', 'asaas_35001', 'VIP Gold', 'R$ 199,90', '20/02/2026', 'pending'],
    ['Nathalia Rodrigues', 'asaas_35002', 'VIP Gold', 'R$ 199,90', '09/03/2026', 'active'],
    ['Mônica Ramos', 'asaas_35003', 'Basic Care', 'R$ 99,90', '25/02/2026', 'active'],
    ['Iara Lima', 'asaas_35004', 'Basic Care', 'R$ 99,90', '03/02/2026', 'active'],
    ['Mônica Andrade', 'asaas_35005', 'Basic Care', 'R$ 99,90', '20/02/2026', 'active'],
    ['Beatriz Almeida', 'asaas_35006', 'VIP Gold', 'R$ 199,90', '01/03/2026', 'active'],
    ['Priscila Moura', 'asaas_35007', 'VIP Gold', 'R$ 199,90', '26/03/2026', 'active'],
    ['Débora Ferreira', 'asaas_35008', 'Basic Care', 'R$ 99,90', '14/03/2026', 'active'],
    ['Mariana Duarte', 'asaas_35009', 'Basic Care', 'R$ 99,90', '19/02/2026', 'active'],
    ['Rafaela Rocha', 'asaas_35010', 'VIP Gold', 'R$ 199,90', '17/02/2026', 'pending'],
    ['Vanessa Araújo', 'asaas_35011', 'VIP Gold', 'R$ 199,90', '17/02/2026', 'active'],
    ['Vanessa Santos', 'asaas_35012', 'VIP Gold', 'R$ 199,90', '10/03/2026', 'active'],
    ['Fernanda Ramos', 'asaas_35013', 'VIP Gold', 'R$ 199,90', '12/03/2026', 'active'],
    ['Sabrina Ramos', 'asaas_35014', 'Basic Care', 'R$ 99,90', '27/03/2026', 'active'],
    ['Camila Duarte', 'asaas_35015', 'VIP Gold', 'R$ 199,90', '09/03/2026', 'pending'],
    ['Yasmin Santana', 'asaas_35016', 'VIP Gold', 'R$ 199,90', '06/03/2026', 'pending'],
    ['Sabrina Lima', 'asaas_35017', 'Basic Care', 'R$ 99,90', '08/03/2026', 'active'],
    ['Nathalia Martins', 'asaas_35018', 'Basic Care', 'R$ 99,90', '15/03/2026', 'active'],
    ['Helena Santana', 'asaas_35019', 'Basic Care', 'R$ 99,90', '13/02/2026', 'active'],
    ['Camila Silva', 'asaas_35020', 'Basic Care', 'R$ 99,90', '13/03/2026', 'overdue'],
    ['Manuela Vasconcelos', 'asaas_35021', 'VIP Gold', 'R$ 199,90', '14/03/2026', 'pending'],
    ['Júlia Vieira', 'asaas_35022', 'VIP Gold', 'R$ 199,90', '17/03/2026', 'active'],
    ['Sônia Cavalcante', 'asaas_35023', 'Basic Care', 'R$ 99,90', '28/03/2026', 'active'],
    ['Débora Teixeira', 'asaas_35024', 'Basic Care', 'R$ 99,90', '02/03/2026', 'pending'],
    ['Iara Santos', 'asaas_35025', 'Basic Care', 'R$ 99,90', '14/02/2026', 'pending'],
    ['Helena Souza', 'asaas_35026', 'Basic Care', 'R$ 99,90', '06/02/2026', 'pending'],
    ['Talita Gomes', 'asaas_35027', 'Basic Care', 'R$ 99,90', '22/02/2026', 'active'],
    ['Paula Vieira', 'asaas_35028', 'Basic Care', 'R$ 99,90', '04/03/2026', 'active'],
    ['Paula Carvalho', 'asaas_35029', 'VIP Gold', 'R$ 199,90', '12/03/2026', 'overdue'],
    ['Cecília Santana', 'asaas_35030', 'Basic Care', 'R$ 99,90', '18/03/2026', 'active'],
    ['Sabrina Santana', 'asaas_35031', 'VIP Gold', 'R$ 199,90', '04/03/2026', 'active'],
    ['Aline Lima', 'asaas_35032', 'Basic Care', 'R$ 99,90', '23/02/2026', 'active'],
    ['Sabrina Cavalcante', 'asaas_35033', 'VIP Gold', 'R$ 199,90', '18/03/2026', 'overdue'],
    ['Gisele Almeida', 'asaas_35034', 'Basic Care', 'R$ 99,90', '22/02/2026', 'active'],
    ['Isadora Nascimento', 'asaas_35035', 'VIP Gold', 'R$ 199,90', '25/03/2026', 'active'],
    ['Carolina Souza', 'asaas_35036', 'Basic Care', 'R$ 99,90', '20/03/2026', 'active'],
    ['Cecília Martins', 'asaas_35037', 'VIP Gold', 'R$ 199,90', '07/03/2026', 'active'],
    ['Sônia Vieira', 'asaas_35038', 'VIP Gold', 'R$ 199,90', '13/03/2026', 'active'],
  ];

  function initials(name) {
    const parts = (name || '').trim().split(/\s+/).filter(Boolean);
    const a = parts[0]?.[0] || 'C';
    const b = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (a + b).toUpperCase();
  }

  function statusTag(status) {
    if (status === 'active') return '<span class="status-tag tag-active">PAGO / ATIVO</span>';
    if (status === 'pending') return '<span class="status-tag tag-pending">PENDENTE</span>';
    return '<span class="status-tag tag-overdue">VENCIDO</span>';
  }

  function actionCell(status) {
    if (status === 'overdue') {
      return '<button class="btn" style="background: var(--color-accent); color: white; border: none; padding: 8px 12px; border-radius: 4px; font-size: 0.7rem;">NOTIFICAR</button>';
    }
    return '<button class="btn-sync" title="Ver no Asaas"><i class="fas fa-external-link-alt"></i></button>';
  }

  function rowHtml(s) {
    const [name, id, plan, value, due, status] = s;
    const init = initials(name);
    const initStyle = status === 'overdue' ? 'style="background:#f8f9fa;"' : '';
    return `
      <tr>
        <td class="client-cell">
          <div class="client-initials" ${initStyle}>${init}</div>
          <div>
            <strong>${name}</strong><br>
            <small style="color:#999;">ID: ${id}</small>
          </div>
        </td>
        <td><span style="font-weight: 600;">${plan}</span></td>
        <td>${value}</td>
        <td>${due}</td>
        <td>${statusTag(status)}</td>
        <td>${actionCell(status)}</td>
      </tr>`;
  }

  function seedTable() {
    const tbody = document.getElementById('club-table-body');
    if (!tbody) return;
    tbody.innerHTML = SUBS.map(rowHtml).join('');
  }

  function wireSearch() {
    const searchInput = document.querySelector('.search-wrapper input');
    const tbody = document.getElementById('club-table-body');
    if (!searchInput || !tbody) return;

    searchInput.addEventListener('input', () => {
      const term = (searchInput.value || '').toLowerCase();
      tbody.querySelectorAll('tr').forEach((row) => {
        const text = (row.innerText || '').toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }

  function init() {
    seedTable();
    wireSearch();

    const btnSync = document.getElementById('btn-sync');
    if (btnSync) btnSync.addEventListener('click', () => location.reload());
  }

  document.addEventListener('DOMContentLoaded', init);
})();
