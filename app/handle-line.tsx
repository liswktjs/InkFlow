import SubjectItem from '@/src/components/SubjectItem';
import Title from '@/src/pages/HandleLine/components/Title';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';

const SubjectListWrapper = styled.ScrollView`
  margin-top: 30px;
`;

const HandleLinePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Title />
      <SubjectListWrapper>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
        <SubjectItem onPress={() => {}}>subject1</SubjectItem>
      </SubjectListWrapper>
    </SafeAreaView>
  );
};

export default HandleLinePage;
