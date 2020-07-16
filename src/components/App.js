import React from 'react';
import '../css/styles.css';

const App = () => (
	<div className="container">
		<div className="wrapper">
			<h1 className="title">
				<span role="img" aria-label="Bolt">
					⚡
				</span>{' '}
				React Bolt Lite
			</h1>
			<p className="p">
				Light version of{' '}
				<a
					className="link"
					href="https://github.com/leonardomso/react-bolt"
					target="_blank"
				>
					the most simple and robust React
					boilerplate.
				</a>
			</p>
			<p>
				Read the article{' '}
				<a
					className="link"
					href="https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a"
					target="_blank"
				>
					here.
				</a>
			</p>
		</div>
	</div>
);

export default App;
