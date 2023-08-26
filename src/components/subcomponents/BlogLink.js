import React from 'react'
import styled from 'styled-components';


const BlogLink = () => {

  const Blog = styled.div`
    position: absolute;
    top: 50%;
    right: 2%;
    transform: rotate(90deg) translate(-50%, -50%);
    @media (max-width: 768px){
      display: none;
    }
`

const NavBlog = styled.a`
   text-decoration: none;
   color: var(--main-color);

   &:hover, &:focus {
    color: rgba(200, 222, 222, 0.5);
  }
`

  return (
    <Blog>
      <NavBlog href='#blog' >
      Blog
      </NavBlog>
    </Blog>
  )
}

export default BlogLink