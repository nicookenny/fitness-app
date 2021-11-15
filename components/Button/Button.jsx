import React from 'react';
import { Text } from 'react-native';
import { ButtonWithStyles, TextButton } from './styles';
const Button = ({ onPress, label = 'Tocar', ...rest }) => {
	return (
		<ButtonWithStyles {...rest} onPress={onPress}>
			<TextButton>{label}</TextButton>
		</ButtonWithStyles>
	);
};

export default Button;
