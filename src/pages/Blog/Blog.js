import React from 'react';
import locations from '../../constants/locations'

const Blog = ({location}) => {
  if(location === locations.BLOG){
    return (
      <div>Blog</div>
    )
  }

  return null
}

export default Blog;
