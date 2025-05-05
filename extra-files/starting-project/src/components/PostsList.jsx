import { useState } from 'react'
import {v4 as uuidv4  }  from 'uuid'
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
			{posts.length > 0 && (
				<ul className={classes['posts']}>
					{posts.map((post) => (
						<Post
							key={uuidv4()}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
		</>
	)
}

export default PostsList
