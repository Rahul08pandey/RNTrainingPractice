import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementCounter, decrementCounter, multipleCounter} from '../../actions/counterAction';

export const Redux = props => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState('');
  const counterReducer = useSelector(state => state);

  useEffect(() => {
    console.log(counterReducer, 'stateReducer');
    setCounter(counterReducer.counter);
  }, [counterReducer]);

  const increaseCounter = parameter => {
    dispatch(incrementCounter(parameter));
    // dispatch({
    //   type: 'INCREMENT_COUNTER',
    //   payload: parameter,
    // });
  };

  const decreaseCounter = () => {
    dispatch(decrementCounter());
  };

  // const multiplyCounter = () => {
  //   dispatch(multipleCounter());
  // }

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'black'}}>
      <ImageBackground
        style={{flex:1,}}
        source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGI5-ztcqIAghyvElhazj8xgv2xJ4QMNAXTg&usqp=CAU')}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginVertical: 50}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
              Counter Value ={counter}
            </Text>
          </View>
          <View style={{marginVertical: 5}}>
            <Button
              title="Increment +1"
              style={{marginVertical: 50}}
              onPress={() => {
                increaseCounter(1);
              }}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Button
              title="Increment +10"
              style={{marginVertical: 50}}
              onPress={() => {
                increaseCounter(10);
              }}
            />
          </View>
          <View style={{marginVertical: 50}}>
            <Button
              title="Decrement -1"
              onPress={() => {
                decreaseCounter();
              }}
            />
          </View>
          {/* <View style={{ marginVertical: 50 }}>
            <Button
              title="Multiply *2"
              onPress={() => {
                multiplyCounter(2);
            }}/>
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};
