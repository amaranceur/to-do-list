export default function TodoCard(props){
    const {children , index , handleDeleteTodos,handleEditTodos}=props
    return(
        <li className='todoItem' >
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>handleDeleteTodos(index)}>
            <i className="fa-regular fa-trash-can"></i>

            </button>
            <button onClick={()=>handleEditTodos(index)}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
        </li>
    )
}