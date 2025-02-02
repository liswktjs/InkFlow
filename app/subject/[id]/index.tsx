import SubjectItem from '@/src/components/SubjectItem';
import LineAddButton from '@/src/pages/HandleSubjectLine/components/LineAddButton';
import LineInfoModal from '@/src/pages/HandleSubjectLine/components/LineInfoModal';
import LineItem from '@/src/pages/HandleSubjectLine/components/LineItem';
import styled from '@emotion/native';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

const Title = styled.Text`
  font-size: 24;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const HandleSubjectLinePage = () => {
  const router = useRouter();

  const onAddButtonPress = (id: number) => {
    router.push(`/subject/${id}/add`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Title>용기와 도전</Title>
      <ScrollView
        style={{ marginTop: 30, marginBottom: 100, width: '100%', padding: 20 }}
      >
        <LineItem
          onPress={() => {}}
          author="authoral;sdkjf;slkdj"
          sentence="gkslkdassfjl;ksadf;lksdf;lksajdfl;ksdfa ;sdkf;l'ksad;'fksd';flsd';lfsd;flkskd;lf"
        />
      </ScrollView>
      <LineAddButton onPress={() => onAddButtonPress(1)} />

      <LineInfoModal
        isOpen={false}
        sentence="salsdfjlsdkjflsdkjflskdjflskjdf"
        author="익명"
        onClosePress={() => {}}
        onArrowLeftPress={() => {}}
        onArrowRightPress={() => {}}
        onDeletePress={() => {}}
      />
    </SafeAreaView>
  );
};

export default HandleSubjectLinePage;
