import { useState } from 'react'

import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css'
import Modal from './Modal'

function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([])

	function addPostHandler(postData) {
		setPosts((posts) => [postData, ...posts])
	}

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onCancel={onStopPosting}
						onAddPost={addPostHandler}
					/>
				</Modal>
			)}
			<ul className={classes['posts']}>
				{posts.map((post, index) => (
					<Post
						key={index}
						author={post.author}
						body={post.body}
					/>
				))}
			</ul>
		</>
	)
}

export default PostsList
