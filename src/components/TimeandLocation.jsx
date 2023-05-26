import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeandLocation({weather:{dt,timezone,name,country}}) {
  return <div>
    <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>
            {formatToLocalTime(dt,timezone)}
        </p>
    </div>
    <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>

    </div>
  </div>
}

export default TimeandLocation