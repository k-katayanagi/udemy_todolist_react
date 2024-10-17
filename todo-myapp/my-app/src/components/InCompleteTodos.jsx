export const InCompleateTodos = (props) =>{
    const {todos,onClickComplete,onClickDelete} = props
    return(
        <div className='incompleate-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
            {todos.map((todo,index)=>(
                <li key ={todo}>{/* ループする場合は、uniqueなkeyをつけてあげる */}
                    <div className='list-row'>
                        <p className='todo-item'>{todo}</p>
                        <button onClick={()=>onClickComplete(index)}>完了</button>
                        <button onClick={()=>onClickDelete(index)}>削除</button>{/*onClick={onClickDelete(index)}この書き方だとレンダリングされる度に関数が実行されまくってしまう */}
                    </div>
                </li>
                ))}
            </ul>
        </div>

    )
}