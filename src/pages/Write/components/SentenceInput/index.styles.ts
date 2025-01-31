import styled from '@emotion/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextInputWrapper = styled.TextInput`
  font-size: 24px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.secondary};
  width: 80%;
`;
