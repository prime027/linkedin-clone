import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  const recentItem = (topic) => (
    <div className='Sidebar_recentItem'>
        <span className='Sidebar_hash'>#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className='Sidebar'>
        <div className='Sidebar_top'>
            <img src="https://t4.ftcdn.net/jpg/07/28/98/95/240_F_728989587_SHqjKgsQ2TSENOvMRXNaiT101uhKjjd7.jpg" alt="" />
            <Avatar className='Sidebr_avatar' />
            <h2>Prime</h2>
            <h4>ogbetaprosper85@gmail.com</h4>
        </div>

        <div className='Sidebar_stats'>
            <div className='Sidebar_stat'>
                <p>who viewed you</p>
                <p className='Sidebar_statNumber'>2500</p>
            </div>
            <div className='Sidebar_stat'>
                <p>views on post</p>
                <p className='Sidebar_statNumber'>3500</p>
            </div>
        </div>

        <div className='Sidebar_bottom'>
           <p>Recent</p> 
           {recentItem("reactjs")}
           {recentItem("programming")}
           {recentItem("softwareengineering")}
           {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar