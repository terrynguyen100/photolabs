import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon 
        width={20} 
        height={17} 
        fill="#C80000" 
        outlineWidth = {2}
        stroke = '#C80000'
        displayAlert={!!(props.likedIds.length !== 0)}
        likedLength = {props.likedIds.length}
        
      />
    </div>
  ) 
};

export default FavBadge;