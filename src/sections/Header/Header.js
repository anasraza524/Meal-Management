import React, { useState } from 'react';
import './Header.css';
import { Dialog, DialogTitle, DialogContent, Button, Box, Typography } from '@mui/material';

function Header({ setActiveNav }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);


  const handleSave = (selectedWeek) => {
    setIsDialogOpen(false);
  };

  return (
    <header className="header">
      <Dialog open={isDialogOpen} onClose={false}>
        <DialogTitle>Select Week</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center" mb={2}>
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => (
              <Button
                key={index}
                variant={selectedWeek === week ? 'contained' : 'outlined'}
                color={selectedWeek === week ? 'primary' : 'default'}
                onClick={() => setSelectedWeek(week)}
                style={{ margin: '0 10px' }}
              >
                {week}
              </Button>
            ))}
          </Box>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={() => handleSave(selectedWeek)}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <nav>
        <ul>
          <li onClick={() => setActiveNav('AllMeals')}>All Meals</li>
          <li onClick={() => setActiveNav('Week1')}>Week 1</li>
          <li onClick={() => setActiveNav('Week2')}>Week 2</li>
          <li onClick={() => setActiveNav('Week3')}>Week 3</li>
          <li onClick={() => setActiveNav('Week4')}>Week 4</li>
        </ul>
        <button onClick={()=>setIsDialogOpen(true)} className="add-to-week">Add to Week</button>
      </nav>
    </header>
  );
}

export default Header;
