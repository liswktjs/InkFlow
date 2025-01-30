import styled from '@emotion/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const TabLabel = styled.Pressable`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const TabImage = styled.Image`
  width: 24px;
  height: 24px;
`;
