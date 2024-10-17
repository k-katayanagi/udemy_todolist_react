// src/Todo.jsx
import React, { useState } from 'react';
import './styles.css'; // こう書くことで、子コンポーネントにも反映できるらしい
import { InputTodo } from './components/InputTodo';
import { InCompleateTodos } from './components/InCompleteTodos';
import { CompleateTodos } from './components/CompleteTodos';

export const Todo = () => {
    const [todoText,setTodoText] = useState("");
    const [incompleateTodos,setincompleateTodos] = useState([]);
    const [compleateTodos,setcompleateTodos] = useState([]);

    const onChangeText = (event) =>setTodoText(event.target.value);{/* 引数はなんでもいいが、基本event どの要素でイベントが発生したかがこの「event]に含まれる（この場合はinput）などです*/}
    const onClickAdd = () =>{
        if(todoText === "") return ;
        const newTodos = [...incompleateTodos,todoText];
        setincompleateTodos(newTodos);{/*未完了のTODOの配列を更新*/}
        setTodoText("");
    };

    const onClickDelete = (index) =>{
        
        const newTodos = [...incompleateTodos];{/*set関数に渡すにはまったく新しい配列を用意してあげる*/}
        newTodos.splice(index,1);
        setincompleateTodos(newTodos);{/*未完了のTODOの配列を更新*/}
    };

    const onClickComplete = (index) =>{
        const newincompleateTodos = [...incompleateTodos];
        newincompleateTodos.splice(index,1);
        const newCompleteTodos =[...compleateTodos,incompleateTodos[index]]
        setincompleateTodos(newincompleateTodos);{/*未完了のTODOの配列を更新*/}
        setcompleateTodos(newCompleteTodos);
    };

    const onClickBack = (index) =>{
        const newcompleateTodos = [...compleateTodos];
        newcompleateTodos.splice(index,1);
        const newincompleateTodos = [...incompleateTodos,compleateTodos[index]];
        setcompleateTodos(newcompleateTodos);
        setincompleateTodos(newincompleateTodos);
    };


    return (
        <>
            <InputTodo todoText = {todoText} onChange = {onChangeText} onClick = {onClickAdd}/>
           <InCompleateTodos todos={incompleateTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
            <CompleateTodos todos={compleateTodos} onClickBack={onClickBack} />
        </>
    );
};
