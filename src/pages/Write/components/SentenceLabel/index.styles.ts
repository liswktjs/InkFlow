import styled from '@emotion/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
`;

export const SentenceLine = styled.Text`
  width: fit-content;
  flex-wrap: wrap;
  font-size: 26px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom-width: 1.5px;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const Author = styled.Text`
  padding-top: 16px;
  font-size: 18px;
`;
