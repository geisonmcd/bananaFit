import React, { useEffect } from 'react';
import { Container, CustomButton, CustomButtonText } from './styles';
import { useNavigation} from '@react-navigation/native';

export default () => {

	const navigation = useNavigation();

	useEffect(() => {
		// navigation.navigate('Timetables');
	});

	return (
		<Container>
			<CustomButton onPress={() => navigation.navigate('Timetables')}>
				<CustomButtonText>Vai pra Timetables</CustomButtonText>
			</CustomButton>
		</Container>
	);
};