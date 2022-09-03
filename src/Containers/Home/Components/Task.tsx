import {OperationInterface, TaskInterface} from "../../../Reducers/user/types";
import {FunctionComponent} from "react";
import {Operation} from "./Operation";

interface TaskProps {
    data: TaskInterface;
}

const operationsDummy: Array<OperationInterface> = [{
    title: 'Example 12123123123',
    id: 's'
}, {
    title: 'Example123123123',
    id: 's'
}]

export const Task: FunctionComponent<TaskProps> = ({data}) => {
    return <section className="mt-8">
        <div className="bg-slate-100 mt-2 rounded-md border-l-4 border-l-blue-500 pl-2 py-2 pr-4 drop-shadow-md">
            <div className="flex justify-between">
                <p className="text-medium text-gray-400">Tech</p>
                <p className="text-medium text-gray-400 flex items-center">
                    <span className="block left--6 top-[50%] w-2 h-2 bg-blue-500 rounded-2xl mr-1"/>
                    In progress
                </p>
            </div>
            <h2 className='font-medium text-lg mt-1'>
                {data.title}
            </h2>
            <div className="flex justify-between text-base text-gray-400">
                <p>0 operations left</p>
                <p>10 minutes</p>
            </div>

            <div className="w-full pl-8">
                {operationsDummy.map(operation => <Operation data={operation}/>)}
            </div>
        </div>

    </section>
}