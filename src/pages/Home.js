import Card from '../components/Card'
import React, { useEffect, useState } from 'react'
import fireDb from '../firebase'
import { Link } from 'react-router-dom'


const Home = () => {
    const [data, setData] = useState({})
    useEffect(()=>{
        fireDb.child('notes').on('value', (snapshot) => {
            if (snapshot.val() !== null){
                setData({...snapshot.val()})
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [])
  return (
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 p-5 bg-gray-200'>
        {Object.keys(data).map((id, index)=>(
              <Card 
              key={id}
              title = {data[id].title} 
              tagline = {data[id].tagline}
              description = {data[id].description}
              pinned = {data[id].pinned}
              date = {data[id].date}
              id = {id} />
        ))}
           
      </div>
    
  )
}

export default Home