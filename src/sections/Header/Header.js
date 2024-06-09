import React, { useState } from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import { Box } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
function Header({ setActiveNav , handleSave,activeNav }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState('');


  const handleClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="header">
      <Dialog open={isDialogOpen} onClose={handleClose} 
       aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle>Select Week</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center" mb={2}>
            {weeks.map((week, index)=> (
              <Button
                key={index}
                variant={selectedWeek === week ? 'contained' : 'outlined'}
                onClick={() => setSelectedWeek(week)}
                style={{ margin: '0 10px' }}
              >
                {week}
              </Button>
            ))}
          </Box>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={() => {handleSave(selectedWeek);setIsDialogOpen(false);}}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      
      <nav>
        <ul>
          <li style={{backgroundColor:activeNav=== "AllMeals"?"gray":"rgb(240, 237, 237)"}}  onClick={() => setActiveNav('AllMeals')}>All Meals</li>
          <li style={{backgroundColor:activeNav=== "Week1"?"gray":"rgb(240, 237, 237)"}}  onClick={() => setActiveNav('Week1')}>Week 1</li>
          <li style={{backgroundColor:activeNav=== "Week2"?"gray":"rgb(240, 237, 237)"}}  onClick={() => setActiveNav('Week2')}>Week 2</li>
          <li style={{backgroundColor:activeNav=== "Week3"?"gray":"rgb(240, 237, 237)"}}  onClick={() => setActiveNav('Week3')}>Week 3</li>
          <li style={{backgroundColor:activeNav=== "Week4"?"gray":"rgb(240, 237, 237)"}}  onClick={() => setActiveNav('Week4')}>Week 4</li>
        </ul>
        <Button variant="contained" onClick={()=>setIsDialogOpen(true)} className="add-to-week">Add to Week</Button>
      </nav>
    </div>
  );
}

export default Header;
