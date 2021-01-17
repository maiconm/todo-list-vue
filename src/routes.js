import ToDoList from './components/ToDoList'
import NovaTarefa from './components/NovaTarefa'
export const routes = [
  {
    path: '',
    component: ToDoList,
  },
  {
    path: '/nova-tarefa',
    component: NovaTarefa,
  },
]