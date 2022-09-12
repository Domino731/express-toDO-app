import {forwardRef, FunctionComponent, LegacyRef, useState} from "react";
import DatePickerComponent from "react-datepicker";
import {Input} from "./Input";

export const Datepicker: FunctionComponent = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const ExampleCustomInput = forwardRef(({value, onClick}: { value: string, onClick: any }, ref) => (
        <div ref={ref as LegacyRef<HTMLDivElement>} onClick={onClick}>
            <Input value={value}/>
        </div>
    ));
    return (
        <DatePickerComponent
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // @ts-ignore
            customInput={<ExampleCustomInput/>}
        />
    );
};