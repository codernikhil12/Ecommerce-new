import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
        <h2 className='text-center'>All Right Reserved &copy; DIVYA </h2>
        <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to ="/policy">private Policy</Link>
        </p>
    </div>
  )
}

export default Footer