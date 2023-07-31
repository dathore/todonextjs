"use client"

import React, { useState } from 'react'

const UpdateButton = (data: any) => {
    const todoData = data.data
    const [butonStatus, setButtonStatus] = useState(todoData.completed)
    const _updateButton = async () => {
        const updateTodoById = await fetch('https://dummyjson.com/todos/' + todoData.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: butonStatus
            })
        })
            .then(res => res.json())
            .then(console.log);
        if (butonStatus == true) {
            setButtonStatus(false)
        } else {
            setButtonStatus(true)
        }
        return updateTodoById;
    }
    return (
        <button
            onClick={_updateButton}
            className={butonStatus == true ? "bg-green-600 rounded-md p-1 mt-2 mb-1" : "bg-red-600 rounded-md p-1 mt-2 mb-1"}>
            {butonStatus == true ? "COMPLETED" : "NOT COMPLETED"}
        </button>
    )
}

export default UpdateButton