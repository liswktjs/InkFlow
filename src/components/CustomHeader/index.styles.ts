import { colors } from '@/src/style/color';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.primary,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabImage: {
    width: 24,
    height: 24,
  },
  tabButtonHover: {
    opacity: 0.7,
  },

  title: {
    fontSize: 20,
    color: colors.background,
  },
});

export default styles;
