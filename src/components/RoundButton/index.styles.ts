import styled from '@emotion/native';

export const PressableContainer = styled.Pressable`
  background-color: ${(props) => props.theme.colors.primary_500};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  padding: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;
