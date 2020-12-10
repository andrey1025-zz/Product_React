import React from 'react';
import { Redirect } from 'react-router-dom';

const ProductAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/offer',
			component: React.lazy(() => import('./offer'))
		},
		{
			path: '/offer/:id?',
			component: React.lazy(() => import('./offer/Item'))
		},
		{
			path: '/system/industries',
			component: React.lazy(() => import('./system/industries'))
		},
		{
			path: '/system/industries/:id?',
			component: React.lazy(() => import('./system/industries/IndustryUnit'))
		},
		{
			path: '/system/families',
			component: React.lazy(() => import('./system/families'))
		},
		{
			path: '/system/families/:id?',
			component: React.lazy(() => import('./system/families/FamilyUnit'))
		},
		{
			path: '/system/makes',
			component: React.lazy(() => import('./system/makes'))
		},
		{
			path: '/system/makes/:id?',
			component: React.lazy(() => import('./system/makes/MakeUnit'))
		},
		{
			path: '/system/models',
			component: React.lazy(() => import('./system/models'))
		},
		{
			path: '/system/models/:id?',
			component: React.lazy(() => import('./system/models/ModelUnit'))
		},
		{
			path: '/system/unit_types',
			component: React.lazy(() => import('./system/unit_types'))
		},
		{
			path: '/system/unit_types/:id?',
			component: React.lazy(() => import('./system/unit_types/TypeUnit'))
		},
		{
			path: '/system/units_of_measurement',
			component: React.lazy(() => import('./system/units_of_measurement'))
		},
		{
			path: '/system/units_of_measurement/:id?',
			component: React.lazy(() => import('./system/units_of_measurement/MeasurementUnit'))
		},
		{
			path: '/system/parent_values',
			component: React.lazy(() => import('./system/parent_values'))
		},
		{
			path: '/system/parent_values/:id?',
			component: React.lazy(() => import('./system/parent_values/ParentValuesUnit'))
		},
		{
			path: '/system/child_values',
			component: React.lazy(() => import('./system/child_values'))
		},
		{
			path: '/system/child_values/:id?',
			component: React.lazy(() => import('./system/child_values/ChildValuesUnit'))
		},
		{
			path: '/system/datafield_groups',
			component: React.lazy(() => import('./system/datafield_groups'))
		},
		{
			path: '/system/datafield_groups/:id?',
			component: React.lazy(() => import('./system/datafield_groups/DatafieldGroupsUnit'))
		},
		{
			path: '/system/datafields',
			component: React.lazy(() => import('./system/datafields'))
		},
		{
			path: '/system/datafields/:id?',
			component: React.lazy(() => import('./system/datafields/DatafieldsUnit'))
		},
		{
			path: '/system/categories',
			component: React.lazy(() => import('./system/categories'))
		},
		{
			path: '/system/categories/:id?',
			component: React.lazy(() => import('./system/categories/CategoriesUnit'))
		},
		{
			path: '/system/users',
			component: React.lazy(() => import('./system/users'))
		},
		{
			path: '/system/users/:id?',
			component: React.lazy(() => import('./system/users/IndividualUser'))
		},
		{
			path: '/',
			component: () => <Redirect to="/offers" />
		}
	]
};

export default ProductAppConfig;
