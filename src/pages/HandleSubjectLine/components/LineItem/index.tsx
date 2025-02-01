import { Pressable, Text, View } from 'react-native';
import * as S from './index.styles';

interface Props {
  sentence: string;
  author: string;
  onPress: () => void;
}

const LineItem = ({ sentence, author, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <S.Container pressed={pressed}>
          <S.Sentence numberOfLines={1}>{sentence}</S.Sentence>
          <S.Author>{author}</S.Author>
        </S.Container>
      )}
    </Pressable>
  );
};

export default LineItem;
