import styled from 'styled-components';

export const ButtonWithStyles = styled.TouchableOpacity`
	width: ${({ width = '150px' }) => width};
	height: ${({ height = '50px' }) => height};
	border-radius: 50;
	background-color: linear-gradient(118deg, rgba(63, 61, 87, 1) 0%, rgba(22, 21, 32, 1) 100%);
	justify-content: center;
	align-items: center;
`;

export const TextButton = styled.Text`
	color: white;
`;
