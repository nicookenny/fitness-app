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

export const TextButton = styled.Text`
	color: white;
	font-size: 18;
	font-weight: 600;
`;
