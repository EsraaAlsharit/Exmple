import React, { useState } from 'react';

const List = (props) => {
    
    const [List, setList] = useState([]);
    const [ListContext, setListContext] = useState();
    //text-decoration-line-through

    const Delete =(id)=>{
        setList(List.filter((_item,i)=> i !== id))
        
        // var newList = List
        // newList.splice(id,1)
        // console.log(newList)
        // setList(newList);
        // setListContext("")
    }

    const contextHandle=(e) => {setListContext(e.target.value)}

    const createList = (e) => {
        e.preventDefault();
        if(ListContext.length === 0){
            return ; 
        }
        const todoItem={
            text: ListContext,
            complete: false
        }
    
        setList([...List, todoItem]);
        ListContext("")
    };

    const handleToggleComplete= (idx)=>{
        const updateTodos = List.map((todo,i) => {
            if(idx === i){
                todo.complete=!todo.complete;
                const updateTodo ={ ...todo, complete: todo.complete};
                return updateTodo
            }
            return todo;
        });
        setList(updateTodos)
    }

    return (
        <div className="container m-5">
            <div className='mb-5'>
                <form onSubmit={createList}>
                    <div className=" d-flex justify-content-around align-items-center">
                        <input className='form-control mx-3' type="text" onChange={contextHandle} value={ListContext}/>
                        <input type="submit" className='btn btn-primary' value="Add" />
                    </div>
                </form>
            </div>
            <div className=''>
                {
                List.map((todo, i)=>{
                    console.log(todo)
                    return <div className='w-50 d-flex justify-content-around align-items-center text-center my-3'>
                        { todo.complete ? <p className='fw-bold text-decoration-line-through'>{todo.text}</p> : <p className='fw-bold'>{todo.text}</p>}
                        <input checked={todo.complete}  onChange={(e) => {handleToggleComplete(i);}} type="checkbox" class="form-check-input" />
                        <input type="submit" className='btn btn-dark' value="Delete" onClick={(event)=> {Delete(i)}} />
                        </div>
                    }
                )
                }
            </div>
        </div>
    );
};

export default List;
