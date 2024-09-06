import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

        <div className='header_left'>
            <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt=''/> 
            
            

            <div className='header_search'>
                <SearchIcon />
                <input type='text' />

            </div>


        </div>

        <div className='header_right'>
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption avatar="C:\Users\prosp\Downloads\snb nft.gif" title="me" />
        </div>

    </div>
  )
}

export default Header