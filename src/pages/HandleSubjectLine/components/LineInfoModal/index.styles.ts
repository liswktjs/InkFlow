import styled from '@emotion/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  height: 50%;
  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: 20px;

  justify-content: center;
`;

export const Header = styled.View`
  padding: 10px;

  align-items: flex-start;

  position: absolute;
  top: 10px;
`;

export const CloseButtonWrapper = styled.View<{ pressed: boolean }>`
  border-radius: 50%;
  padding: 4px;
  width: fit-content;
  height: fit-content;

  ${(props) =>
    props.pressed && {
      backgroundColor: props.theme.colors.white,
    }}
`;

export const SentenceInfoWrapper = styled.View`
  flex-direction: column;
  gap: 10px;

  align-items: center;

  margin-top: 20px;
`;

export const Line = styled.Text`
  text-align: center;
  font-size: 20px;

  width: 80%;

  font-weight: bold;
`;

export const Author = styled.Text`
  font-size: 16px;
`;

export const ControllerWrapper = styled.View`
  flex-direction: row;
  gap: 10px;

  justify-content: center;

  position: absolute;
  width: 100%;
  bottom: 30px;
  align-items: center;
`;

export const ButtonWrapper = styled.View<{ pressed: boolean }>`
  background-color: ${(props) =>
    props.pressed ? props.theme.colors.third : props.theme.colors.white};
  border-radius: 50%;
  padding: 4px;
`;
