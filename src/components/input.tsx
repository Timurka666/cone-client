import React from "react";

interface IProps {
    name: string,
    value: any,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    type: React.HTMLInputTypeAttribute
}

export function Input(props: IProps) {
    return (
        <div>
            <p className="input-name">{props.name}</p>
            <input
            className="input"
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}