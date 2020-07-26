import React,{Component} from "react";


class Input extends Component {

 


  render(){
  const {handleChange,handleClick,onValue,editItem} = this.props;
    return (

     <div className="card card-body my-3">
        
         <form>
        <div className="input-group">
           
            <div className="input-group-prepend">
      <div className="input-group-text bg-primary-text-white">
      <i className="fas fa-clipboard-list"></i>
        </div>
            </div>
          <input onChange={handleChange} value={onValue} className="form-control" type="text" name="item" />
        </div>
        
        <button onClick={handleClick} className={editItem ? "btn btn-success btn-block my-2" : "btn btn-primary btn-block my-2"}
        type="submit"
        disabled={onValue ? false : true}
        >
           {editItem ? 'Edit' : 'Add'}  
          
          </button>
    </form>
       </div>

    )
  }
}


export default Input;