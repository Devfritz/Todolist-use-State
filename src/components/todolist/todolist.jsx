import React from "react";
import Item from "./item.jsx";

class TodoList extends React.Component{






  render(){
    const {list,onDeleteAll,handleDelete,handleEdit} = this.props
     
    return (
      <section className="card card-header">


      <h2> Hello from Todolist </h2>

    {
      list.map( (item) => {
      
         return (
          
        <Item 
         key={item.id}
         item= {item} 
         onDelete={ () => handleDelete(item.id)}
         onEdit={ () => handleEdit(item.id)}
         />  
      
   
         ) 
  
      })

      
       
        
    }
     <button onClick={onDeleteAll} className="btn btn-danger btn-block my-2" type="submit">Delete</button>
     

      </section>
    )
  }

}


export default TodoList;