import React ,{Component} from "react";
import "./styles.css";
import { v4 as uuidv4 } from 'uuid';
import Input from "./components/Input";
import TodoList from "./components/todolist/todolist";


 class App extends Component{

    state = {
      id:uuidv4(),
      inputValue :"",
      items:[],
      editItem:false
    };


     handleChange = (e) => {
      //  const value = e.target.value;
      this.setState({
        id:uuidv4(),
     inputValue:e.target.value,
      })
      
    }


      handleClick = (e) => {
        e.preventDefault();
        const newValue = {
         id:this.state.id,
        inputValue:this.state.inputValue,
       
        }

         const updateItems = [...this.state.items,newValue];

    this.setState({
          items:updateItems,
          inputValue:"",
          editItem:false
    })
  
      }


      handleDelete = () => {
         this.setState({
           items:[]
         })
      }

       deleteItem = (id) => {
         const filterDelete = this.state.items.filter(item => id !== item.id);

         this.setState({
           items:filterDelete
         })
       }

        editItem = (id) => {
      const filterDelete = this.state.items.filter(item => id !== item.id);
      const selectItem = this.state.items.find(item => id === item.id);

      this.setState({
        id:id,
        items:filterDelete,
        inputValue:selectItem.inputValue,
        editItem:true
      })
    
        }
        
   render(){

   
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo Input</h3>

               <Input
                  handleChange={this.handleChange} 
                  handleClick={this.handleClick}
                  onValue= {this.state.inputValue}
                  editItem={this.state.editItem}
               />
               
              <TodoList
              list={this.state.items}
              id={this.state.id}
              onDeleteAll={this.handleDelete}
              handleDelete={this.deleteItem}
              handleEdit={this.editItem}
             
                 
              />

              </div>
             
          </div>
      </div>
    </> 
   
    
  ); 
}
}


export default App;