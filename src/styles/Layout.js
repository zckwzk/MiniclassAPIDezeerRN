import {StyleSheet} from 'react-native';
import {Colors} from '.';

export const Layout = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    borderColor: Colors,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 60,
    textAlign: 'center',
  },
});
