import styled from '@emotion/native';

export const Container = styled.View<{ pressed: boolean }>`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 8px;

  background-color: ${(props) =>
    props.pressed ? props.theme.colors.third : props.theme.colors.white};

  margin-bottom: 10px;
`;

export const Sentence = styled.Text`
  font-size: 18px;
`;

export const Author = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`;
