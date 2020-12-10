import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'my_offers',
		title: 'My Offers',
		translate: 'MY_OFFERS',
		type: 'item',
		icon: 'loyalty',
		url: '/offers'
	},
	{
		id: 'System',
		title: 'System',
		translate: 'SYSTEM',
		type: 'collapse',
		icon: 'list_alt',
		children: [
			{
				id: 'industries',
				title: 'Industries',
				type: 'item',
				url: '/system/industries',
				exact: true
			},
			{
				id: 'families',
				title: 'Families',
				type: 'item',
				url: '/system/families',
				exact: true
			},
			{
				id: 'makes',
				title: 'Makes',
				type: 'item',
				url: '/system/makes',
				exact: true
			},
			{
				id: 'models',
				title: 'Models',
				type: 'item',
				url: '/system/models',
				exact: true
			},
			{
				id: 'unit_types',
				title: 'Unit Types',
				type: 'item',
				url: '/system/unit_types',
				exact: true
			},
			{
				id: 'units_of_measurement',
				title: 'Units of Measurement',
				type: 'item',
				url: '/system/units_of_measurement',
				exact: true
			},
			{
				id: 'parent_values',
				title: 'Parent Values',
				type: 'item',
				url: '/system/parent_values',
				exact: true
			},
			{
				id: 'child_values',
				title: 'Child Values',
				type: 'item',
				url: '/system/child_values',
				exact: true
			},
			{
				id: 'datafield_groups',
				title: 'Datafield Groups',
				type: 'item',
				url: '/system/datafield_groups',
				exact: true
			},
			{
				id: 'datafields',
				title: 'Datafields',
				type: 'item',
				url: '/system/datafields',
				exact: true
			},
			{
				id: 'categories',
				title: 'Categories',
				type: 'item',
				url: '/system/categories',
				exact: true
			},
			{
				id: 'users',
				title: 'Users',
				type: 'item',
				url: '/system/users',
				exact: true
			}
		]
	}
];

export default navigationConfig;
