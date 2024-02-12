import styled from 'styled-components/native'
import { colors } from './Styles'

const { primary, secondary, red } = colors

export const makeIcon = ({ right, left, top, iconColor }) => `
  right: ${right}px;
  left: ${left}px;
  top: ${top}px;
  position: absolute;
  z-index: 1;
  color: ${iconColor};
`

export const RightIcon = styled.TouchableOpacity`
  ${makeIcon({ right: 10, top: 50, iconColor: secondary })}
`

export const RightIconPassword = styled.TouchableOpacity`
  ${makeIcon({ right: 10, top: 50, iconColor: secondary })}
`

export const BackIcon = styled.TouchableOpacity`
  ${makeIcon({ left: 115, top: 7, iconColor: primary })}
`
