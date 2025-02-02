import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;

  gap: 16px;
`;

export const InputLabel = styled.View`
  gap: 10px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 20px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SubmitButtonView = styled.View<{
  disabled: boolean;
  pressed: boolean;
}>`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;

  background-color: ${(props) =>
    props.pressed ? props.theme.colors.secondary : props.theme.colors.primary};

  ${(props) =>
    props.disabled && {
      backgroundColor: props.theme.colors.third!,
    }}
`;

export const SubmitButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 18px;
`;
