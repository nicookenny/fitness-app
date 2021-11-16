import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { LoginView } from './styles';

const Login = () => {
	return (
		<LoginView>
			<Input label={'Correo electronico'} />
			<Button onPress={() => console.log('Hola')} label={'Iniciar sesión'} width={'65%'} height={'10%'} />
		</LoginView>
	);
};

export default Login;
