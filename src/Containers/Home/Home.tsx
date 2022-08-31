import {NewTaskHeader} from "./Components/NewTaskHeader";
import {TasksBoard} from "./Components/TasksBoard";

export const Home = () => <div className="h-full w-full bg-white bg-gray-200">
    <div className='w-[1000px] mx-auto h-auto mt-[80px] shadow-2xl px-6 py-8 rounded-md'>
        <NewTaskHeader/>
        <TasksBoard/>
    </div>
</div>

