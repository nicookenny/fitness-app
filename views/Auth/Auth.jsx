import React from 'react';
import { Image, Text } from 'react-native';
import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';
import { ContainerView, FormView, LogoView } from './styles';
console.log(logo);
const Auth = () => {
	return (
		<ContainerView>
			<LogoView>
				<Image source={logo} />
			</LogoView>
			<FormView>
				<Button onPress={() => console.log('Hola')} label={'Iniciar sesión'} width={'65%'} height={'10%'} />
			</FormView>
		</ContainerView>
	);
};

export default Auth;
