import React from 'react'

const AboutCard = ({ title, number }) => {
    return (
        <div>
            <p className='text-4xl font-medium text-gray-800'>{`${number}+`}</p>
            <p>{title}</p>
        </div>
    )
}

export default AboutCard