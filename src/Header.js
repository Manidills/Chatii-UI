import React from 'react';
import './Header.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdForum } from 'react-icons/md';
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';




function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={ () => history.replace(backButton)}>
                    <AiOutlineArrowLeft className='hicon'/>
                </IconButton>
            ): (
                <IconButton>
                    <BsFillPersonFill className='hicon'/>
                </IconButton>


            )

            }




            
            <Link to='/'>
        
            <img 
              className='logo'
              src='https://cutewallpaper.org/21/iron-man-logos/Download-for-free-10-PNG-Marvel-logo-iron-man-top-images-at-.jpg'
              alt='ironlogo'
            />
            </Link>
            <Link to='/chat'>
                <IconButton>
                <MdForum className='hicon' />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header;