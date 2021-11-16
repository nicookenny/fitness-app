import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'expo-blur';

import { LinearGradient } from 'expo-linear-gradient';
import { InputWithStyles, LabelInput } from './styles';
import { TextInput } from 'react-native';
const Input = ({ onPress, label = 'Label', ...rest }) => {
	return (
		<InputWithStyles {...rest}>
			<LabelInput> {label} </LabelInput>
			<TextInput onPress={onPress} styles={styles.Input} />
		</InputWithStyles>
	);
};

export default Input;

const styles = StyleSheet.create({
	LinearGradient: {
		width: '100%',
		height: '100%',
		padding: 5,
	},
	Input: {
		width: '100%',
		height: '100%',
		color: 'white',
		fontSize: 20,
	},
});
