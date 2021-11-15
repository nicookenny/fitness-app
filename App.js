import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import logo from './assets/logo.png';
import Auth from './views/Auth/Auth';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar StatusBarStyle='light-content' />
			<Auth />
		</View>
	);
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#161520',
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusbar: {
		color: 'white',
	},
});
