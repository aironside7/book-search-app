import React from 'react'
import axios from 'axios'
import "./style.css"

import { useState} from 'react'
import Card from './Card'
const Bookdiv = () => {
    const [search,setSearch]=useState("")
    const[showbook,setShowbook]=useState([])
    
    const searchBook=(event)=>{
        if(event.key==="Enter"){
            axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&Key=AIzaSyDlyT9_B6TRBDZbB2GmDMtjxT6naPMU4qo")
            .then((res)=>{
                setShowbook(res.data.items)
            }).catch((err)=>{
              console.log(err)
            })
        }
      
    }
// AIzaSyDlyT9_B6TRBDZbB2GmDMtjxT6naPMU4qo
  return (
    <>
        <div className='cont'> 
          <h1>Book Search</h1>     
        </div>

        <div>
            <input placeholder='search the book name'
             onChange={(event)=>setSearch(event.target.value)} value={search} onKeyPress={searchBook}
             ></input>
             <button onClick={searchBook} >Seacrch</button>
        </div>

        <div>
           { <Card bookRender={showbook} />}
        </div>
            
    </>
  )
}

export default Bookdiv
