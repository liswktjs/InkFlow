import { useRouter } from 'expo-router';
import styled from '@emotion/native';
import SubjectItem from '../src/components/SubjectItem';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const TitleWrapper = styled.View`
  border-bottom-width: 1px;
  width: 80%;
  padding-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const SubjectListWrapper = styled.ScrollView`
  margin-top: 30px;
`;

const SelectSubjectPage = () => {
  const router = useRouter();

  const onSubjectItemPress = (id?: number) => {
    router.push(`/write/${id}`);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>오늘의 주제를 골라봐요</Title>
      </TitleWrapper>
      <SubjectListWrapper>
        <SubjectItem
          onPress={() => {
            onSubjectItemPress(1);
          }}
        >
          test
        </SubjectItem>
      </SubjectListWrapper>
    </Container>
  );
};

export default SelectSubjectPage;
