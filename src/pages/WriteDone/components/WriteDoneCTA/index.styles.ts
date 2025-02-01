import styled from '@emotion/native';

export const Container = styled.View`
  align-items: center;

  gap: 50;
`;

export const ContentWrapper = styled.View`
  align-items: center;
  gap: 16;

  margin-top: 50px;
`;

export const Content = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const GoContainer = styled.View`
  gap: 10;
`;

export const GoWrapper = styled.View<{ pressed: boolean }>`
  flex-direction: row;
  gap: 10px;
  border-radius: 15px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.pressed && {
      backgroundColor: props.theme.colors.third,
    }}
`;

export const GoTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;
