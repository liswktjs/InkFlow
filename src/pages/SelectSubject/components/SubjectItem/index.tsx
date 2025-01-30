import { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import * as S from './index.styles';

interface Props {
  onPress: () => void;
}

const SubjectItem = ({ children, onPress }: PropsWithChildren<Props>) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginBottom: 10,
      }}
    >
      {({ pressed }) => (
        <S.Container pressed={pressed}>
          <S.Description>{children}</S.Description>
        </S.Container>
      )}
    </Pressable>
  );
};

export default SubjectItem;
