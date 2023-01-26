import styled from 'styled-components'
import { Grid } from '@mui/material'

interface IGridWithImageBg {
	background?: string
}

export const GridWithImageBg = styled(Grid)`
	background-image: url(${({
		background = 'https://source.unsplash.com/featured/?nature',
	}: IGridWithImageBg) => background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`
