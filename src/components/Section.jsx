import React from 'react'
import jessi from '../assets/images/avatar-jessica.jpeg'


const links = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']

const Section = () => {
  return (
    <div className='container'>
      <div className='section'>
        <img src={jessi} alt='Jeremy' className='imagen'/>
        <h1>
          Jessica Randall
        </h1>
        <h4>
          London, United Kingdom
        </h4>
        <p>
          "Front-end developer and avid reader."
        </p>
        <div className='social'>
          {
            links.map((link, index) => (
              <a href="#" key={index} className="link">{link}</a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Section