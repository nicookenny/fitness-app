import React from 'react';
import { Image, Text } from 'react-native';
import logo from '../../assets/logo.png';
import Login from './Login';
import { ContainerView, FormView, LogoImage, LogoView } from './styles';
console.log(logo);
const Auth = () => {
	return (
		<ContainerView>
			<LogoView>
				<LogoImage source={logo} />
			</LogoView>
			<FormView>
				<Login />
			</FormView>
		</ContainerView>
	);
};

export default Auth;
