import React from 'react'
import breakslogo from '../../my-icons/breaks-logo.svg'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout")
    handleClose()
  }
  return (
    <div className='h-screen sticky top-0'>
      <div className='py-5'>
        <img src={breakslogo} alt='logo-icon' height='70' width='70' />
      </div>

      <div>
        <div className='space-y-6'>
          {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center' onClick={() => item.title === "Profile" ? navigate(`/profile/5`) : navigate(item.path)}>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>)}

        </div>
        <div className='py-10'>
          <Button sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#F44336", color: "white", '&:hover': { bgcolor: '#9C2B23' } }} variant='contained'>post</Button>
        </div>

        <div className='flex items-center justify-between py-5'>
          <div className='flex items-center space-x-3'>
            <Avatar alt='username' src='https://i.pinimg.com/originals/67/b4/9a/67b49ade8a57876381e7eb9097a59f80.jpg' />
          </div>
          <div>
            <span>Regina Georage</span>
            <span className='opacity-70'>@regina29</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon sx={{ color: '#F44336' }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>

      </div>

    </div>

  )
}

export default Navigation