import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '@/src/style/theme';
import * as S from './index.styles';

const WriteDoneCTA = () => {
  const router = useRouter();

  const onGoHomePress = () => {
    router.push('/');
  };

  const onGoRecordPress = () => {
    router.push('/handle-line');
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <Icon name="checkmark-done" size={80} color={theme.colors.primary} />
        <S.Content>기록 완료</S.Content>
      </S.ContentWrapper>

      <S.GoContainer>
        <Pressable onPress={onGoHomePress}>
          {({ pressed }) => (
            <S.GoWrapper pressed={pressed}>
              <Icon
                name="home-outline"
                size={20}
                color={theme.colors.secondary}
              />
              <S.GoTitle>홈으로 돌아가기</S.GoTitle>
            </S.GoWrapper>
          )}
        </Pressable>

        <Pressable onPress={onGoRecordPress}>
          {({ pressed }) => (
            <S.GoWrapper pressed={pressed}>
              <Icon
                name="file-tray-full-outline"
                size={20}
                color={theme.colors.secondary}
              />
              <S.GoTitle>기록 보러 가기</S.GoTitle>
            </S.GoWrapper>
          )}
        </Pressable>
      </S.GoContainer>
    </S.Container>
  );
};

export default WriteDoneCTA;
