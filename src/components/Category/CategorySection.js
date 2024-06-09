import React from 'react'
import NewsFeedCard from '../NewsFeed/NewsFeedCard'
import AllPosts from './AllPosts'

function CategorySection({categories}) {
  return (
    <div>
        <NewsFeedCard categorySection={true} />
        <AllPosts categories={categories} />
    </div>
  )
}

export default CategorySection