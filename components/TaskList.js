import React, { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const addTask = () => {
    if (task.length === 0) {
      setError('The task is empty');
      return;
    }
    const newKey = tasks.length > 0 ? (parseInt(tasks[tasks.length - 1].key) + 1).toString() : '0';
    setTasks([...tasks, { task, key: newKey }]);
    setTask('');
    setError('');
  };

  const removeTask = (key) => {
    setTasks(tasks.filter((t) => t.key !== key));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder='Add Task'
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.task}</Text>
            <TouchableOpacity onPress={() => removeTask(item.key)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f8ff',
  },
  input: {
    height: 40,
    marginBottom: 10,
    marginTop: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
