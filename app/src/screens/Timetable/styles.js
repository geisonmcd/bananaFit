import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background-color: #94e3df;
	flex; 1;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`; 

export const CustomButton = styled.TouchableOpacity`
	height: 60px;
	background-color: #268596;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
	padding: 15px;
	margin-bottom: 10px;
	 		
`;

export const CustomButtonText = styled.Text`
	font-size: 18px;
	color: #FFF;
`;