import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <MenuIcon />

                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="" />
            </div>
            <div className="header__center">
                <input placeholder='Search' type="text" />
                <SearchIcon className='header__inputButton' />
            </div>
            <div className="header__right">

                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar
                    alt='leila baneshi'
                    src='https://avatars2.githubusercontent.com/u/57330277?s=460&u=775ec18cfe93ff881788343f57440a235afdff46&v=4'
                />

            </div>



        </div>
    )
}

export default Header
