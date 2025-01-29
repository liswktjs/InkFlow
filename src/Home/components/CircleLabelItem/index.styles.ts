import theme from '@/src/style/theme';
import styled from '@emotion/native';

export const Container = styled.Pressable`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${theme.colors.third};
`;

export const Circle = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CircleText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
`;

export const ContentWrapper = styled.View`
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;

export const SubText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
