import styled from 'styled-components/native'

export const makeIcon = ({ right, left, top, iconColor }) => `
  right: ${right}px;
  left: ${left}px;
  top: ${top}px;
  position: absolute;
  z-index: 1;
  color: ${iconColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightIcon = styled.TouchableOpacity`
  ${({ theme }) => makeIcon({ right: 15, top: 44, iconColor: theme.colors.secondary })}

 

`

export const RightIconPassword = styled.TouchableOpacity`
  ${({ theme }) => makeIcon({ right: 15, top: 45, iconColor: theme.colors.secondary })}
`

export const BackIcon = styled.TouchableOpacity`
  ${({ theme }) => makeIcon({ left: 105, top: 11, iconColor: theme.colors.primary })}
`
