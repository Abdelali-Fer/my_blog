import React from 'react'
import ProfileAuthr from './ProfileAuthr'

function AuthorList() {
    return (
        <div className='w-full py-12 px-6 sm:px-12 lg:px-24'>
            <div className='w-full flex items-center justify-center'>
                <h2 className='text-xl sm:text-2xl font-bold mt-2 tracking-wide'>List of authors</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center md:justify-start'>
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
            </div>
        </div>
    )
}

export default AuthorList