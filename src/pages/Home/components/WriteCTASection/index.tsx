import { useRouter } from 'expo-router';
import RoundButton from '@/src/components/RoundButton';
import * as S from './index.styles';

const WriteCTASection = () => {
  const router = useRouter();

  const onStartToWriteButtonPress = () => {
    router.push('/select-subject');
  };

  return (
    <S.Container>
      <S.Title>오늘의 문장을 시작해봐요</S.Title>
      <RoundButton onPress={onStartToWriteButtonPress}>
        Start to Write
      </RoundButton>
    </S.Container>
  );
};

export default WriteCTASection;
