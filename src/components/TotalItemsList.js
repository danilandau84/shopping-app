// src/components/TotalItemsList.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


const TotalItemsList = () => {
  console.log("TotalItemsList!!!!")
  const [data, setData] = useState([]);
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
        setData(result);
      } catch (error) {
        console.log(error.message);
      } 
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  const totalItems = data.reduce(function (acc, value) {
    const foundIndex = acc.findIndex(item => item.category == value.category);
    if (foundIndex === -1) {
      acc.push({ category: value.category, items: [value.name], count: 1 });
    } else {
      acc[foundIndex].items.push(value.name);
      acc[foundIndex].count += 1;
    }
    return acc;
  }, []);
  return (
    <div style={{ direction: 'rtl', flexDirection: 'row' }}>
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
    </div>
  );
};

export default TotalItemsList;
