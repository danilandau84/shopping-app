// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemForm from './components/ItemForm';
import TotalItemsList from './components/TotalItemsList';
import { Container, Typography } from '@mui/material';


function App() {
  return (
    <Provider store={store} direction='rtl'>
      <Container >
        <Typography  variant="h4" align="center" gutterBottom>
        רשימת קניות
        </Typography>
        <ItemForm />
        <TotalItemsList />
      </Container>
    </Provider>
  );
}

export default App;
