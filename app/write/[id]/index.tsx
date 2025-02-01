import { router, useLocalSearchParams } from 'expo-router';
import { Keyboard, Modal, SafeAreaView, View, Text } from 'react-native';
import { useState } from 'react';

import SentenceInput from '@/src/pages/Write/components/SentenceInput';
import SentenceLabel from '@/src/pages/Write/components/SentenceLabel';
import RoundButton from '@/src/components/RoundButton';

const MOCK_SENTENCE = '할 수 있다고 믿는 사람은 이미 반은 성공한 것이다';

const WriteSentencePage = () => {
  const { id } = useLocalSearchParams();

  const [textValue, setTextValue] = useState('');

  const isSame = textValue.trim() == MOCK_SENTENCE.trim();

  const onSubmitButtonPress = () => {
    Keyboard.dismiss();
    setTextValue('');
    router.push(`/write/${id}/done`);
  };

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <View style={{ gap: 60, paddingTop: 50 }}>
        <SentenceLabel sentence={MOCK_SENTENCE} author="익명" />
        <SentenceInput
          text={textValue}
          onTextChange={(value: string) => {
            setTextValue(value);
          }}
        />
      </View>
      {isSame && (
        <View
          style={{
            marginTop: 40,
            width: '80%',
          }}
        >
          <RoundButton onPress={onSubmitButtonPress}>기록하기</RoundButton>
        </View>
      )}
    </SafeAreaView>
  );
};

export default WriteSentencePage;
