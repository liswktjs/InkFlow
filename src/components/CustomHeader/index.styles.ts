import styled from '@emotion/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const TabLabel = styled.View<{ pressed: boolean }>`
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  padding: 4px;

  ${(props) =>
    props.pressed && {
      backgroundColor: props.theme.colors.secondary,
    }}
`;
