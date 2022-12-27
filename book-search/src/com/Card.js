

import React from 'react'
// import { useEffect } from "react";

const Card = ({bookRender}) => {
  return (
    <> 
    {bookRender.map((post)=>{
               
            return <div key={post.id} className="cont2"> 
                  <img src={post.volumeInfo.imageLinks && post.volumeInfo.imageLinks.thumbnail} alt="error"></img>
                  <h4>{post.volumeInfo.title}</h4>
                  <h4>Author Name:- {post.volumeInfo.authors}</h4>
                  <p>Page Count:-{post.volumeInfo.pageCount}</p>
                  <p>Ratings:-{post.volumeInfo.averageRating}</p>
                  
                    

    
            </div>

         })}
         <div className='extra'>
                    
                    </div>
      
    </>
  )
}

export default Card
