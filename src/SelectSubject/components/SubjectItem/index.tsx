import { Pressable } from 'react-native';
import * as S from './index.styles';
import { PropsWithChildren } from 'react';

interface Props {
  onPress: () => void;
}

const SubjectItem = ({ children, onPress }: PropsWithChildren<Props>) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <S.Container pressed={pressed}>
          <S.Description>{children}</S.Description>
        </S.Container>
      )}
    </Pressable>
  );
};

export default SubjectItem;
