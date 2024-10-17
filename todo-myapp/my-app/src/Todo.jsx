// src/Todo.jsx
import React, { useState } from 'react';
import './styles.css'; // こう書くことで、子コンポーネントにも反映できるらしい

export const Todo = () => {
    const [todoText,setTodoText] = useState("");
    const [incompleateTodos,setincompleateTodos] = useState([
        "TODOです",
        "TODOです2"
    ]);
    const [compleateTodos,setcompleateTodos] = useState([
        "TODOでした",
        "TODOでした2"
    ]);

    const onChangeText = (event) =>setTodoText(event.target.value);{/* 引数はなんでもいいが、基本event どの要素でイベントが発生したかがこの「event]に含まれる（この場合はinput）などです*/}
    const onClickAdd = () =>{
        const newTodos = [...incompleateTodos,todoText];
        setincompleateTodos(newTodos);{/*未完了のTODOの配列を更新*/}
    };


    return (
        <>
            <div className="input-area">
                <input placeholder='TODOを入力' value={todoText} onChange={onChangeText}></input>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className='incompleate-area'>
                <p className='title'>未完了のTODO</p>
                <ul>
                    {incompleateTodos.map((todo)=>(
                        <li key ={todo}>{/* ループする場合は、uniqueなkeyをつけてあげる */}
                            <div className='list-row'>
                                <p className='todo-item'>{todo}</p>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        </li>
                        ))}
                </ul>
            </div>
            <div className='compleat-area'>
                <p className='title'>完了のTODO</p>
                <ul>
                    {compleateTodos.map((todo)=>(
                    <li key ={todo}>
                        <div className='list-row'>
                            <p className='todo-item'>{todo}</p>
                            <button>戻す</button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
