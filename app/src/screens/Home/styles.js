import React from 'react';
import styled from 'styled-components/native';

export const Container= styled.SafeAreaView`
	background-color: grey;
	flex: 1;
	justify-content:center;
	align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
	height: 60px;
	background-color: #268596;
	border-radius: 30px;
	justify-content:center;
	align-items:center;
	 		
 `;
export const CustomButtonText = styled.Text`
	font-size: 18px;
	color: #FFF;
 `;