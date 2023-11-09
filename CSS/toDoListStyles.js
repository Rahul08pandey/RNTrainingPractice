import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tasks: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  editBtn: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },

  deleteBtn: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },

  taskButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },

  doneButton: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },

  container: {
    flex: 1,
    padding: 10,
    rowGap: 10,
    backgroundColor: '#89CFF0',
  },

  heading: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  },

  container1: {
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    flex: 0.8,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    fontSize: 16,
    // width: '10%',
    borderWidth: 2,
    paddingLeft: 10,
  },

  pressAdd: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    color: 'white',
    // width: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },

  addBtn: {
    fontSize: 18,
    color: 'white',
  },

  textList: {
    //   flex: 0.5,
    color: 'black',
    fontSize: 22,
    // width: '50%',
  },

  flatList: {
    // width: '100%',
  },
});