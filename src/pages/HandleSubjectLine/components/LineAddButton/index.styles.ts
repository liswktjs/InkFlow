import styled from '@emotion/native';

export const Container = styled.View`
  position: absolute;

  bottom: 70;

  width: 100%;
  align-items: center;
`;

export const IconWrapper = styled.View<{ pressed: boolean }>`
  background-color: ${(props) =>
    props.pressed ? props.theme.colors.third : props.theme.colors.primary};
  border-radius: 50%;

  padding: 4px;
`;
