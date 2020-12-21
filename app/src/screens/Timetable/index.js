import React from 'react';
import { Text } from 'react-native';
import { Container, CustomButton, CustomButtonText, } from './styles';
import { useNavigation } from '@react-navigation/native';

export default () => {
	
	const navigation = useNavigation();

	return (
		<Container>
			<CustomButton onPress={() => navigation.navigate('Timetable')}>
				<CustomButtonText>ADICIONAR HORÁRIO</CustomButtonText>
			</CustomButton>
		</Container>
	);
};