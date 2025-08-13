import React from 'react'
import HomeBlog from './HomeBlog'
import { Translation } from '../[lang]/dictionaries'


const BlogSuggested = ({t}: {t: Translation}) => {
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
                {t.blog.title}
            </h1>
            <HomeBlog/>
        </div>
    )
}

export default BlogSuggested