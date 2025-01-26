import { create } from 'zustand'
import { Task} from '../../../types'
interface userStore {
tasks: Task[]
setTasks(tasks: Task[]): void
removeTask(taskId: string): void
}

const useStore = create<userStore>((set) => ({
    tasks: [] ,  
    setTasks: (tasks) => set({ tasks }),
    removeTask: (taskId) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) }))
    
}))


export default useStore