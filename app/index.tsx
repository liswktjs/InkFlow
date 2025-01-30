import styled from '@emotion/native';
import CircleLabelItem from '../src/Home/components/CircleLabelItem';
import WriteCTASection from '@/src/Home/components/WriteCTASection';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ListWrapper = styled.ScrollView`
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;

export default function Index() {
  return (
    <Container>
      <WriteCTASection />
      <ListWrapper>
        <CircleLabelItem
          circleText="월"
          title="필사 문구 "
          subText="2025.01.29"
          onPress={() => {
            console.log('work');
          }}
        />
        <CircleLabelItem
          circleText="월"
          title="필사 문구 "
          subText="2025.01.29"
          onPress={() => {
            console.log('work');
          }}
        />
        <CircleLabelItem
          circleText="월"
          title="필사 문구 "
          subText="2025.01.29"
          onPress={() => {
            console.log('work');
          }}
        />
      </ListWrapper>
    </Container>
  );
}
