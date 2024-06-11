// src/components/ItemForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../totalItemsSlice';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const ItemForm = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && input) {

      dispatch(addItem({ category, input}));
      setCategory('');
      setInput('');
    }
  };

  return (
    <Box dir="rtl" component="form" onSubmit={handleSubmit} sx={{  display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: '0 auto', mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel>קטגוריה</InputLabel>
        <Select   dir="rtl" 
          label="קטגוריה"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="מוצרי ניקיון">מוצרי ניקיון</MenuItem>
          <MenuItem value="גבינות">גבינות</MenuItem>
          <MenuItem value="פירות וירקות">פירות וירקות</MenuItem>
          <MenuItem value="בשר ודגים">בשר ודגים</MenuItem>
          <MenuItem value="מאפים">מאפים</MenuItem>
          </Select>
      </FormControl>
      <TextField
         dir="rtl"
        label="הכנס מוצר"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">הוסף</Button>
    </Box>
  );
};

export default ItemForm;
