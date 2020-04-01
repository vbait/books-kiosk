import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Books from './pages/Books';

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Books />
      </Container>
    </>
  );
}

export default Dashboard;
