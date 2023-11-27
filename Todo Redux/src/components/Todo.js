import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, toggleTodo, editTodo} from '../actions/todoAction';
import {
  View,
  TextInput,
  Pressable,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos);
  const todos = data.todos;
  console.log(todos);
  const [task, setTask] = useState('');
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState('');

  // useEffect(() => {
  //   if (todoReducer.length > 0) {
  //     setNewTask(todoReducer);
  //   }
  // }, [todoReducer]);

  const addTask = () => {
    if (task) {
      dispatch(addTodo(task));
      setTask('');
    } else {
      Alert.alert('Please enter a task');
    }
  };

  const toggleTask = id => {
    dispatch(toggleTodo(id));
  };

  const removeTask = id => {
    dispatch(removeTodo(id));
  };

  const editTask = id => {
    if (editTodo && update.trim() !== '') {
      dispatch(editTodo(id));
      setEdit(null);
      setUpdate('');
    }
  };

  const renderTask = ({item}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 10,
        // backgroundColor: 'red',
      }}>
      <Text
        style={[
          {fontSize: 20, color: 'indigo'},
          item.completed && {
            textDecorationLine: 'line-through',
          color: 'red'},
        ]}>
        {item.text}
      </Text>

      <View
        style={{
          width: '40%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // backgroundColor: 'grey',
        }}>
        <TouchableOpacity
          style={{
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => removeTask(item.id)}>
          <FontAwesome name="remove" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => editTask(item.newText)}>
          <Text style={[{fontSize: 20}, item.completed]}>
            <FontAwesome5 name="edit" size={35} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => toggleTask(item.id)}
          disabled={item.completed}>
          <Text
            style={[
              {fontSize: 20},
              item.completed ? {color: 'green'} : {color: 'grey'},
            ]}>
            <Ionicons name="checkmark-done-outline" size={40} />
            {item.completed}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        // padding: 10,
      }}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri: 'https://images.pexels.com/photos/2824173/pexels-photo-2824173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}>
        <View
          style={{
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            ToDo List
          </Text>
        </View>

        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'grey',
          }}>
          <TextInput
            placeholder="Enter a task..."
            value={task}
            onChangeText={text => setTask(text)}
            style={{
              flex: 0.8,
              borderColor: 'black',
              borderWidth: 2,
              fontSize: 20,
            }}
          />
          <Pressable
            style={{
              flex: 0.15,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#57AD88',
            }}
            onPress={addTask}>
            <Text style={{fontSize: 20}}>Add</Text>
          </Pressable>
        </View>

        <View
          style={{
            flex: 0.75,
            // backgroundColor: 'red',
          }}>
          <View style={{flex: 0.1}}>
            <Text style={{color: 'black', fontSize: 22}}>List :</Text>
          </View>

          <View
            style={
              {
                // backgroundColor: 'grey',
              }
            }>
            <FlatList
              data={todos}
              renderItem={renderTask}
              keyExtractor={(item, index) => index.toString()}></FlatList>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Todo;
