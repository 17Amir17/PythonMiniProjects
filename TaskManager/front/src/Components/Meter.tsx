import React from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

interface MeterProps {
    value: number;
    title: string;
}

export default function Meter({value, title}: MeterProps) {
    return (
        <div className="meter">
            <span style={{display: 'flex', justifyContent: 'center'}}>{title}</span>
            <CircularProgressWithLabel value={value}/>
        </div>
    )
}