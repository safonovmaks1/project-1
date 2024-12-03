import { createElement } from 'react';
import './App.css';
import logo from './logo.svg';

const getCurrentYear = () => {
	return new Date().getFullYear();
};

const app = () => {
	return createElement(
		'div',
		{
			className: 'App',
		},
		createElement(
			'header',
			{
				className: 'App-header',
			},
			createElement('img', {
				className: 'App-logo',
				src: logo,
				alt: 'logo',
			}),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, getCurrentYear()),
		),
	);
};

export default function App() {
	return app();
}
