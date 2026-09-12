import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* Barra de Navegação */}
      <header style={{ backgroundColor: '#2e7d32', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🌱 AgroPI - Gestão Inteligente</h1>
        <nav>
          <a href="#inicio" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold' }}>Início</a>
          <a href="#monitoramento" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Monitoramento</a>
          <a href="#relatorios" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Relatórios</a>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ color: '#1b5e20', marginTop: 0 }}>Bem-vindo ao Painel Agrícola</h2>
          <p style={{ color: '#555', lineHeight: '1.6' }}>
            Este sistema faz parte do projeto integrador para o controle e acompanhamento de dados agrícolas, otimizando o monitoramento de safras e recursos.
          </p>
        </section>

        {/* Cards de Métricas (Exemplo da Sprint) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #2e7d32', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Áreas Monitoradas</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2e7d32', margin: 0 }}>12 Lotes</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #0288d1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Umidade Média do Solo</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0288d1', margin: 0 }}>68%</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '5px solid #f57c00', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.1rem' }}>Alertas Ativos</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f57c00', margin: 0 }}>0 Pendências</p>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer style={{ backgroundColor: '#1e3a1e', color: '#ccc', textAlign: 'center', padding: '1.5rem', marginTop: '3rem', fontSize: '0.9rem' }}>
        <p style={{ margin: 0 }}>&copy; 2026 AgroPI - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
