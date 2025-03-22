import React from 'react'
import ProfileAuthr from './ProfileAuthr'

function AuthorList() {
    return (
        <div className='w-full py-12 px-24'>
            <div className='w-full flex items-center justify-center'>
                <h2 className='text-2xl font-bold mt-2 tracking-wide'>List of authors</h2>
            </div>
            <div className='flex items-center justify-between'>
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
                <ProfileAuthr />
            </div>
        </div>
    )
}

export default AuthorList