

function FruitList(props){
    const students = props.students;
    const fruits= props.fruits;
    return(
        <>
        <ul>
            {fruits.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>

        <div className="card-sudent">
                { students.length>0?(
                    <ol>
                    {students.map((item, id)=>(
                        <li key={id}>Name: {item.name} <br /> Grade: {item.grade} </li>
                    ))}
                    </ol>
                    ):""
            }
        </div>
        </>
    )



}

export default  FruitList;