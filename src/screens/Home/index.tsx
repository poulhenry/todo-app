import { useState } from 'react'
import uuid from 'react-native-uuid'
import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { InputTask } from '../../components/InputTask'
import { Task } from '../../components/Task'
import { Empty } from '../../components/Empty'

export type TaskData = {
  id: string
  name: string
  isCompleted: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [valueInput, setValueInput] = useState('')

  const tasksCompleted = tasks.filter((task) => task.isCompleted)

  function handleSubmitInputTask() {
    const task = {
      id: uuid.v4(),
      name: valueInput,
      isCompleted: false,
    }

    setTasks((prevTasks) => [...prevTasks, task])
    setValueInput('')
  }

  function handleCompletedTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  function handleRemoveTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <InputTask
          onInputText={handleSubmitInputTask}
          valueInput={valueInput}
          setValueInput={setValueInput}
        />

        <View style={styles.infoTasks}>
          <Text style={styles.labelCreate}>
            Criadas <Text style={styles.labelQuantity}>{tasks.length}</Text>
          </Text>
          <Text style={styles.labelComplete}>
            Concluídas{' '}
            <Text style={styles.labelQuantity}>{tasksCompleted.length}</Text>
          </Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              id={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
              onCompletedTask={() => handleCompletedTask(item.id)}
              onRemoveTask={() => handleRemoveTask(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  )
}
