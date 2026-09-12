import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* Barra de Navegação */}
      <header style={{ backgroundColor: '#1976d2', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>SGET - Escalas</h1>
        <nav>
          <a href="#inicio" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold' }}>Início</a>
          <a href="#escalas" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Escalas</a>
          <a href="#funcionarios" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Equipe</a>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ color: '#1565c0', marginTop: 0 }}>Painel de Gestão de Escala de Trabalho</h2>
          <p style={{ color: '#555', lineHeight: '1.6' }}>
            Acompanhe a distribuição de turnos, gerencie os horários da equipe e garanta a cobertura completa de todos os postos de trabalho do seu setor de forma eficiente.
          </p>
        </section>

        {/* Cards de Métricas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #1976d2', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Colaboradores Ativos</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1976d2', margin: 0 }}>42</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #43a047', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Cobertura de Turnos (Hoje)</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#43a047', margin: 0 }}>100%</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #e53935', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Faltas / Alertas</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e53935', margin: 0 }}>1 Pendência</p>
          </div>
        </div>

        {/* Visualização da Escala do Dia */}
        <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
          <h3 style={{ color: '#333', marginTop: 0, borderBottom: '2px solid #f4f6f8', paddingBottom: '0.5rem' }}>Escala Atual - Turno da Manhã (08:00 - 14:00)</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ display: 'block', color: '#333' }}>João Silva</strong>
                <span style={{ fontSize: '0.9rem', color: '#777' }}>Suporte Nível 1</span>
              </div>
              <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>Presente</span>
            </li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ display: 'block', color: '#333' }}>Maria Souza</strong>
                <span style={{ fontSize: '0.9rem', color: '#777' }}>Infraestrutura e Redes</span>
              </div>
              <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>Presente</span>
            </li>
            <li style={{ padding: '1rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ display: 'block', color: '#333' }}>Carlos Gomes</strong>
                <span style={{ fontSize: '0.9rem', color: '#777' }}>Manutenção</span>
              </div>
              <span style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>Atrasado</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Rodapé */}
      <footer style={{ backgroundColor: '#0d47a1', color: '#ccc', textAlign: 'center', padding: '1.5rem', marginTop: '3rem', fontSize: '0.9rem' }}>
        <p style={{ margin: 0 }}>&copy; 2026 SGET - Sistema de Gestão de Escala de Trabalho. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
