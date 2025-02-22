import styled from '@emotion/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.third};
  padding: 16px;
  border-radius: 10px;

  width: 80%;
  height: 40%;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  gap: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;
