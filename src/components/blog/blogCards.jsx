import React from 'react'
import './blogCards.css'
import { blog } from '../../assets/data'

const BlogCards = () => {
  return (
    <>
        <section className='blogContent'>
            <div className="grid1">
                {blog.map((item)=> (
                <div className='box boxItems' key={item.id}> 
                <div className='img'>
                <img src={item.cover} alt='' />
                    </div>
                        <div className="details">
                        <div className="tag">
                            <p>{item.category}</p>
                        </div>
                        <h3>{item.title}</h3>
                            <p>{item.desc.slice(0, 150)}...</p>
                            <div className='date'>
                            <h4>{item.date}</h4>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </section>
    </>
  ) 
}

export default BlogCards;