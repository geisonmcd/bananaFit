import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Timetables from '../screens/Timetables';
import Timetable from '../screens/Timetable';
// import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default () => (
	<Drawer.Navigator 
		initialRouteName="Timetables"
		screenOptions={{
			headerShown: true
		}}
	>
		<Drawer.Screen name="Home" component={Home} />
		<Drawer.Screen name="Search" component={Search} />
		<Drawer.Screen name="Appointments" component={Appointments} />
		<Drawer.Screen name="Favorites" component={Favorites} />
		<Drawer.Screen name="Profile" component={Profile} />
		<Drawer.Screen name="Timetables" component={Timetables} />
		<Drawer.Screen name="Timetable" component={Timetable} />
	</Drawer.Navigator>
);