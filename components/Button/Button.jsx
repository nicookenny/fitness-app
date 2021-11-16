import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'expo-blur';

import { LinearGradient } from 'expo-linear-gradient';
import { ButtonWithStyles, TextButton } from './styles';
const Button = ({ onPress, label = 'Tocar', ...rest }) => {
	return (
		<ButtonWithStyles {...rest} onPress={onPress}>
			<LinearGradient
				colors={['rgba(63,61,87,0.3)', 'rgba(22,21,32,1)']}
				style={styles.linearGradient}
				start={{ x: 0, y: -1 }}
				end={{ x: 1, y: 1 }}>
				<BlurView intensity={80} tint='dark' style={styles.linearGradient}>
					<TextButton> {label} </TextButton>
				</BlurView>
			</LinearGradient>
		</ButtonWithStyles>
	);
};

export default Button;

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
	},
	buttonText: {
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
});
