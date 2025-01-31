import styled from '@emotion/native';

export const Container = styled.View`
  height: 50px;

  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
`;

export const IconWrapperButton = styled.View<{ pressed: boolean }>`
  padding: 4px;
  border-radius: 50%;

  justify-content: center;
  align-items: center;

  ${(props) =>
    props.pressed && {
      backgroundColor: props.theme.colors.secondary,
    }}
`;
