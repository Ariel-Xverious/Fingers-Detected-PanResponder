import { useRef, useState } from 'react';
import { Text, View, StyleSheet, PanResponder } from 'react-native';

export default function App() {
  const [touch, setTouch] = useState('No Finger Dectected');
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => {
        if (gesture.numberActiveTouches == 1) {
          setTouch('One Finger Dectected');
        } else if (gesture.numberActiveTouches == 2) {
          setTouch('Two Fingers Dectected');
        } else if (gesture.numberActiveTouches == 3) {
          setTouch('Three Fingers Dectected');
        } 
        return true;
      },
      onPanResponderRelease: (e, gesture) => {
        setTouch('No Finger Dectected');
      },
    })
  ).current;
  return (
    <View>
      <View style={styles.container} {...panResponder.panHandlers}>
        <Text style={styles.text}>{touch}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    height: 400,
    width: 250,
    left: 40,
    backgroundColor: 'lightblue',
    borderRadius: 40,
    borderColor: 'yellow',
    borderWidth: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 35,
  },
});
