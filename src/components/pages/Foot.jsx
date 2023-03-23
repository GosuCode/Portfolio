import React from 'react'
import { Link } from 'react-router-dom'

const Foot = () => {
  return (
    <div className='text-center bg-slate-900 p-2 h-16'>
        <p>© 2023 Alember Shreesh.</p>
        <p><Link to='/disclaimer'>Legal Disclaimer</Link></p>

    </div>
  )
}

export default Foot
