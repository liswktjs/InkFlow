import LineAddForm from '@/src/pages/AddLine/components/LineAddForm';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';

const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  width: 80%;
`;

export const Subject = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary_500};
  text-align: center;
  width: 80%;
  font-weight: bold;
`;

const LineAddPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', gap: 40 }}>
      <Title numberOfLines={2}>
        <Subject>"용기와 도전"</Subject>에 추가하고 싶은 문장을 입력해주세요
      </Title>

      <LineAddForm
        handleFormSubmit={({ line, author }) => {
          console.log(line, author);
        }}
      />
    </SafeAreaView>
  );
};

export default LineAddPage;
