import React from 'react'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

import usePosts from '../hooks/use-posts'

export default () => {
   const posts = usePosts()
   return (
      <>
         <Layout>
            <h2>Read My Blog</h2>
            {posts.map(post => (
               <PostPreview key={post.slug} post={post} />
            ))}
         </Layout>
      </>
   )
}
