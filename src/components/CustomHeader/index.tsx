import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import styles from './index.styles';
import { DrawerHeaderProps } from '@react-navigation/drawer';

const CustomHeader = ({ options, navigation }: DrawerHeaderProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}
          style={({ pressed }) => [pressed && styles.tabButtonHover]}
        >
          <Image
            source={require('../../../assets/images/tab.png')}
            style={styles.tabImage}
          />
        </Pressable>

        <Text style={styles.title}>Write My Line</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: { backgroundColor: 'red', fontSize: 16, color: 'black' },
});

export default CustomHeader;
