import styled from '@emotion/native';
import SubjectList from '@/src/pages/SelectSubject/components/SubjectList';

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
  return (
    <Container>
      <TitleWrapper>
        <Title>오늘의 주제를 골라봐요</Title>
      </TitleWrapper>
      <SubjectListWrapper>
        <SubjectList />
      </SubjectListWrapper>
    </Container>
  );
};

export default SelectSubjectPage;
