import React from 'react';
import { Redirect } from 'react-router-dom';

const ECommerceAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/products/:productId/:productHandle?',
			component: React.lazy(() => import('./product/Product'))
		},
		{
			path: '/products',
			component: React.lazy(() => import('./products/Products'))
		},
		{
			path: '/',
			component: () => <Redirect to="/products" />
		}
	]
};

export default ECommerceAppConfig;
