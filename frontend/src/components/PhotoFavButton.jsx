import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick = {() => {props.toggleFav(props.id)}}>

        {props.liked && <FavIcon fill= {'#C80000'}/>}
        {!props.liked && <FavIcon fill = {'#EEEEEE'}/>}
    
      </div>
    </div>
  );
}

export default PhotoFavButton;