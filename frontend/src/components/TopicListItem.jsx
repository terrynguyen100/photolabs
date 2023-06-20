import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => {props.setPhotosEndPoint(`/api/topics/photos/${props.id}`)}}>{props.title}</span>  
    </div>
  )
}

// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "title": "Nature"
// }
export default TopicListItem