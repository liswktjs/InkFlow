import styled from '@emotion/native';

export const Container = styled.View<{ pressed: boolean }>`
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 300px;
  background-color: ${(props) =>
    props.pressed ? props.theme.colors.primary : props.theme.colors.secondary};
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;
