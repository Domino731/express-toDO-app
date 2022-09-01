import {NewTaskHeader} from "./Components/NewTaskHeader";
import {TasksBoard} from "./Components/TasksBoard";

export const Home = () => <div className="h-full w-full bg-white bg-gray-200" style={{
    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    backgroundSize: '100% 400px',
    backgroundRepeat: 'no-repeat'
}}>
    <div className='w-[1000px] mx-auto h-auto mt-[80px] shadow-2xl px-6 py-8 rounded-md relative bg-gray-50'>
        <NewTaskHeader/>
        <TasksBoard/>
    </div>
</div>

