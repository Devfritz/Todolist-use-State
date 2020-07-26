import React from "react";

class Item extends React.Component{

  render(){
const {item,onDelete,onEdit} = this.props
    return (
      <>
      <table className="table table-stripped table-responsive">
        <thead>
          <tr>
          <th>Id</th>
        <th>Item</th>
        <th> Options </th>
        </tr>
       </thead>

          <tbody>
   <tr> 
  <td> {item.id} </td>
   <td>{item.inputValue}</td>

  <td>
<button className="btn btn-secondary btn-inline-block mr-2" onClick={onEdit} type="submit">Edit</button>
<button className="btn btn-danger btn-inline-block" onClick={onDelete} type="submit">Delete</button>


    </td>

</tr>


      </tbody>
       

    

        </table>
       
   
</>
    )
  }

}


export default Item;