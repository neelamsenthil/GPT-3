import React from 'react'
import './Article.css'
import articleData from '../../Data'


const Article = () => {
    return (
        <div className='article' id='article'>
            <div className="article-container">
            {articleData.map((item, index) => {
                return <div key={index} className="article-img">
                    <img src={item.image} alt="" />
                    <div className="article-text">
                        <p>{item.date}</p>
                        <h2>{item.question}</h2>
                        <p><span>{item.read}</span></p>
                    </div>

                </div>

            })}


            </div>
        </div>
    )
}

export default Article