import useGetLibrary from '@/src/api/library/get/useGetLibrary';
import SubjectItem from '@/src/components/SubjectItem';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

const SubjectList = () => {
  const router = useRouter();

  const { data } = useGetLibrary({});

  const onSubjectItemPress = (id?: string) => {
    router.push(`/write/${id}`);
  };

  return (
    <View>
      {data?.map(({ id, subject }) => (
        <SubjectItem
          key={id}
          onPress={() => {
            onSubjectItemPress(id);
          }}
        >
          {subject}
        </SubjectItem>
      ))}
    </View>
  );
};

export default SubjectList;
