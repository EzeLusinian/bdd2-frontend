import React from 'react'

import { AlertDiv } from './styled';
import { colors } from '../../../styles/colors';

export const Alert = ({ alerta }) => {

	const { msg, error } = alerta

	return (

		<AlertDiv
			color={error ? colors.red : colors.primary}

		>
			{msg}
		</AlertDiv>

	)

}