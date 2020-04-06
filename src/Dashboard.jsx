import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Container from './components/Container';
import Books from './pages/Books';
import store from './store';

function Dashboard() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Books />
      </Container>
    </Provider>
  );
}

export default Dashboard;
