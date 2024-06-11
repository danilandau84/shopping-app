// src/components/TotalItemsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const TotalItemsList = () => {
  const allItems = useSelector((state) => state.totalItems);
  const totalItems = allItems.reduce(function (acc, value) {
    const foundIndex = acc.findIndex(item => item.category == value.category);
    if (foundIndex === -1) {
        acc.push({category: value.category, items: [value.input], count: 1});
    } else {
        acc[foundIndex].items.push(value.input);
        acc[foundIndex].count += 1;
    }
    return acc;
}, []);

  return (
    <div style={{ direction:'rtl', flexDirection:'row'}}>
      <List style={{ direction:'rtl',    display: 'inline-flex', alignItems:'flex-start' 
}}>
        {totalItems.map((item, index) => (
          <ListItem key={index}   sx={{ direction: 'rtl', flexDirection: 'column' , width:300 }}>
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
