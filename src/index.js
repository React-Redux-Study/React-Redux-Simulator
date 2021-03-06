import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommonStyle from "./Assets/Style/Common"

import App from './App';

import store from './Store';
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<CookiesProvider>
		<Provider store={store}>
			<CommonStyle />
			<App />
		</Provider>
	</CookiesProvider>
);
