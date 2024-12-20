import { Text, View } from "react-native";
import styled from '@emotion/native'

const Container = styled.View`
  background-color: blue;
`

export default function Index() {
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </Container>
  );
}
