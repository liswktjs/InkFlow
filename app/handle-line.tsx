import SubjectItem from '@/src/components/SubjectItem';
import Title from '@/src/pages/HandleLine/components/Title';
import styled from '@emotion/native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';

const SubjectListWrapper = styled.ScrollView`
  margin-top: 30px;
`;

const HandleLinePage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Title />
      <SubjectListWrapper>
        <SubjectItem
          onPress={() => {
            router.push(`/subject/1`);
          }}
        >
          subject1
        </SubjectItem>
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
