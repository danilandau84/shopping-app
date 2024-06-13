// src/components/TotalItemsList.js
import React, { useEffect,useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { fetchItemsSuccess } from '../totalItemsSlice';



const TotalItemsList = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('http://localhost:4001/items');
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();  
         dispatch(fetchItemsSuccess(result));
      } catch (error) {
        console.log(error.message);
      } 
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  const allItems = useSelector((state) => state.totalItems);
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
