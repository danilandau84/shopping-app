// src/components/TotalItemsList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { fetchItemsSuccess } from '../totalItemsSlice';



const TotalItemsList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => { 
    const fetchData = async () => {
      try { 
        const response = await fetch('http://localhost:4001/items');
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();  
         dispatch(fetchItemsSuccess(result));
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function 
    fetchData();
  }, [dispatch]); // Empty dependency array means this useEffect runs once when the component mounts

  const allItems = useSelector((state) => state.totalItems);
  console.log('allItems VIEW', allItems)
  const totalItems = allItems.reduce(function (acc, value) {
    const foundIndex = acc.findIndex(item => item.category === value.category);
    if (foundIndex === -1) {
      acc.push({ category: value.category, items: [value.name], count: 1 });
    } else {
      acc[foundIndex].items.push(value.name);
      acc[foundIndex].count += 1;
    }
    return acc;
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box style={{ direction: 'rtl', flexDirection: 'row' }}>
      <List style={{
        direction: 'rtl', display: 'inline-flex', alignItems: 'flex-start'
      }}>
        {totalItems.map((item, index) => (
          <ListItem key={index} sx={{ direction: 'rtl', flexDirection: 'column', width: 300 }}>
            <ListItemText primary={`${item.category} - ${item.count} מוצרים `} />
            <div>
              {item.items.map((text, index) => (
                <Typography key={index} variant="body2" color="textSecondary" align="right" direction="rtl">
                  {text}
                </Typography>
              ))}
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TotalItemsList;
