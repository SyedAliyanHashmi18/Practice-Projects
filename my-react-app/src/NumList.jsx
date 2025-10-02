

function NumList(props){

    const todos = props.todos;

    return(
        <>
            <h2>Even Numbers</h2>
            <ul>
                {todos.map((todos , index ) => (
                    <li key={index}>{todos.completed == true ? `Task: ${todos.task}, Completed: ✅`:`Task: ${todos.task}, Completed: ❌`}</li>
                ))}
            </ul>
        </>
    )

}

export default NumList;