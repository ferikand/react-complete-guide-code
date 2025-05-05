import { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css'
import Modal from './Modal'

function PostsList({ isPosting, onStopPosting }) {
	const [enteredBody, setEnteredBody] = useState('lorem ipsum')
	const [enteredAuthor, setEnteredAuthor] = useState('Andrii')

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value)
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value)
	}

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
						onCancel={onStopPosting}
					/>
				</Modal>
			)}
			<ul className={classes['posts']}>
				<Post
					author={enteredAuthor}
					body={enteredBody}
				/>
				<Post
					author='Maksim'
					body='lorem ipsum'
				/>
			</ul>
		</>
	)
}

export default PostsList
