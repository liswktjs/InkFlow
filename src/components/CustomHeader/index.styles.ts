import styled from '@emotion/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TabImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.background};
`;
