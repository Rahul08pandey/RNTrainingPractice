import 'react-native-gesture-handler';
import {todo} from 'node:test';
import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  InteractionManager,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {styles} from './styles';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [newTask, setNewTask] = useState([]);
  const [editIndex, setEditIndex] = useState('-1');

  const addTask = () => {
    if (task) {
      setNewTask([...newTask, {text: task, completed: false}]);
      setTask('');
    } else {
      Alert.alert('Please enter a task');
    }
  };

  const toggleTask = index => {
    const newArray = [...newTask];
    newArray[index].done = !newArray[index].done;
    setNewTask(newArray);
  };

  const editTask = index => {
    const taskToEdit = newTask[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const deleteTask = index => {
    const delTask = [...newTask];
    delTask.splice(index, 1);
    setNewTask(delTask);
  };

  const renderTask = ({item, index}) => (
    <View style={styles.tasks}>
      <Text
        style={{
          textDecorationLine: item.done ? 'line-through' : 'none',
          color: 'blue',
          fontSize: 18,
          width: '40%',
        }}>
        {item.text}
      </Text>

      <View style={styles.taskButton}>
        <TouchableOpacity onPress={() => editTask(index)}>
          <Text style={styles.editBtn}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Text style={styles.deleteBtn}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleTask(index)}
          disabled={item.done}>
          <Text
            style={[
              styles.doneButton,
              item.done ? {color: 'yellow'} : {color: 'green'},
            ]}>
            {' '}
            {item.done ? 'Completed' : 'Complete'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> My To Do </Text>

      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Enter ToDo...."
          value={task}
          onChangeText={text => setTask(text)}></TextInput>

        <Pressable style={styles.pressAdd} onPress={addTask}>
          <Text style={styles.addBtn}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.textList}>List :</Text>

      <View style={styles.flatList}>
        <FlatList
          data={newTask}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}></FlatList>
      </View>
    </View>
  );
};

export default ToDoList;
