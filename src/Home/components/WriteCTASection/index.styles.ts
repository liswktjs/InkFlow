import styled from '@emotion/native';

export const Container = styled.View`
  flex-direction: column;
  gap: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;
