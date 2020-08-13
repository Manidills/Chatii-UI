import React from 'react';
import { MdReplay } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { MdFlashOn} from 'react-icons/md';
import { IconContext } from "react-icons";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
    return (
        <div className='SwipeButtons'>
             <IconContext.Provider
      value={{ color: 'orange', size: '30px' }}>
    
      <div>
            <IconButton>
                <MdReplay/>
            </IconButton>
      </div>
            </IconContext.Provider>
            <IconContext.Provider
      value={{ color: 'red', size: '30px' }}>
    
      <div>
            <IconButton>
                <MdCancel />
            </IconButton>
      </div>
            </IconContext.Provider>
            <IconContext.Provider
      value={{ color: 'pink', size: '30px' }}>
    
      <div>
            <IconButton>
               <BsFillStarFill />
            </IconButton>
      </div>
            </IconContext.Provider>
            <IconContext.Provider
      value={{ color: 'black', size: '30px' }}>
    
      <div>
            <IconButton>
               <MdFavorite />
            </IconButton>
      </div>
            </IconContext.Provider>
            <IconContext.Provider
      value={{ color: 'yellow', size: '30px' }}>
    
      <div>
            <IconButton>
               <MdFlashOn />
            </IconButton>
      </div>
            </IconContext.Provider>
            
            
            
            
            

        </div>
    )
}

export default SwipeButton
