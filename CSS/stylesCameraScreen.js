import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  heading: {
    flex: 0.1,
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cameraHeading: {
    // flex: 0.1,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
