import styled from 'styled-components';

export const ButtonWithStyles = styled.TouchableOpacity`
	width: ${({ width = '150px' }) => width};
	height: ${({ height = '50px' }) => height};
	border-radius: 500px;
	justify-content: center;
	align-items: center;
	shadow-color: #000000;
	shadow-opacity: 0.58;
	shadow-radius: 6;
	elevation: 18;
	shadow-offset:{
		width: 0,
		height: 0,
	};
`;

export const LabelInput = styled.Text`
	color: rgba(255, 255, 255, 0.7);
	font-size: 14;
	font-weight: 600;
`;

export const InputWithStyles = styled.View`
	width: 80%;
	height: 50px;
	border-radius: 14px;
	color: white;
`;
