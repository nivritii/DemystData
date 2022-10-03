import { Input, Select } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import React, { useState } from "react";

// export const Dropdown = () => {
// const options = ["Business One", "Business Two"];

//     return (
//         <div className="relative w-full lg:max-w-sm">
//             <select
//                 className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
//                 {options.map(option => <option key={option} value={option}>{option}</option>)}
//             </select>
//         </div>
//     );
// }


type DropdownProps = {
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: Array<{ name: string }>,
    currentValue: string
}

export const Dropdown = (props: DropdownProps) => {

    return (
        <Select onSelect={props.changeHandler} >
            {props.values.map(option => (<option key={option.name} value={option.name} >{option.name}</option>))}
        </Select>
    );
}