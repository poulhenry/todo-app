import { useState } from 'react'
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

  const tasksCompleted = tasks.filter((task) => task.isCompleted)

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <InputTask onInputText={setTasks} />

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
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  )
}
