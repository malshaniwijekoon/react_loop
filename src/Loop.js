import React from "react";
import JsonData from './data.json';
import {useState, useEffect} from "react";

function Loop() {

    const [leave, setLeave] = useState({
        name: 0,
        casualCount: 0,
        annualCount: 0,
        sickCount: 0
    });

    const [totalLeave, setTotalLeave] = useState({
        totalAnnual: 0,
        totalNonAnnual: 0,
        totalPercentage: 0
    });

    useEffect(() => {
        JsonData.map(
            (item) => {
                if (item.name === "Casual") {
                    leave.casualCount = item.count;
                } else if (item.name === "Annual") {
                    leave.annualCount = item.count;
                } else if (item.name === "Sick") {
                    leave.sickCount = item.count;
                }
                totalLeave.totalAnnual = leave.annualCount;
                totalLeave.totalNonAnnual = leave.casualCount + leave.sickCount;
                totalLeave.totalPercentage = (leave.annualCount / (totalLeave.totalNonAnnual + totalLeave.totalAnnual)) * 100;
            }
        )
        setLeave({...leave});
        setTotalLeave({...totalLeave});
    }, [])

    return (
        <div>
            <h1>Annual - {totalLeave.totalAnnual}</h1>
            <h1>Non Annual - {totalLeave.totalNonAnnual}</h1>
            <h1>Annual Percentage - {totalLeave.totalPercentage}%</h1>
        </div>
    )
}

export default Loop;