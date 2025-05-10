import React from 'react'
import HomeBlog from './HomeBlog'

const BlogSuggested = () => {
    // const suggested = [1,3,4];
    // const blogPosts = [
    //     {
    //         title: "Climate Change",
    //         description: "Climate change is beginning to have a devastating impact on forests across the world Climate change is beginning to have a devastating Climate change is beginning to have a devastating impact on forests across the world Climate change is beginning to have a devastating impact on Climate change is beginning to have a devastating impact on forests across the world forests across the world",
    //         imageUrl: "/images/home/carousel1.jpg",
    //         link: ""
    //     },
    //     {
    //         title: "Climate Change",
    //         description: "Climate change is beginning to have a devastating impact on forests across the world",
    //         imageUrl: "/images/home/carousel7.jpg",
    //         link: ""
    //     },
    //     {
    //         title: "Climate Change",
    //         description: "Climate change is beginning to have a devastating impact on forests across the world",
    //         imageUrl: "/images/home/carousel8.jpg",
    //         link: ""
    //     },
    // ]
    return (
        <div className='flex flex-col gap-8'>
            <h1 className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
                Preporučeno za vas
            </h1>
            <HomeBlog/>
        </div>
    )
}

export default BlogSuggested