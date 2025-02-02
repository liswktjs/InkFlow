import { Pressable } from 'react-native';
import { useState } from 'react';
import * as S from './index.styles';

interface Props {
  handleFormSubmit: ({
    line,
    author,
  }: {
    line: string;
    author: string;
  }) => void;
}

const LineAddForm = ({ handleFormSubmit }: Props) => {
  const [line, setLine] = useState('');
  const [author, setAuthor] = useState('');

  const isSubmitAvailable = line.length >= 1 && author.length >= 1;

  const onSubmitPress = () => {
    handleFormSubmit({ line, author });
    setLine('');
    setAuthor('');
  };

  return (
    <S.Container>
      <S.InputLabel>
        <S.Label>문장</S.Label>
        <S.TextInput
          value={line}
          onChangeText={(value) => setLine(value)}
          multiline
        />
      </S.InputLabel>
      <S.InputLabel>
        <S.Label>저자</S.Label>
        <S.TextInput
          value={author}
          onChangeText={(value) => setAuthor(value)}
          multiline
        />
      </S.InputLabel>
      <Pressable disabled={!isSubmitAvailable} onPress={onSubmitPress}>
        {({ pressed }) => (
          <S.SubmitButtonView disabled={!isSubmitAvailable} pressed={pressed}>
            <S.SubmitButtonText>저장 하기</S.SubmitButtonText>
          </S.SubmitButtonView>
        )}
      </Pressable>
    </S.Container>
  );
};

export default LineAddForm;
