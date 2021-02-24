class ToDoController{
    addNewToDo(req, res){

    }
   async getToDos(req, res){
      let toDos=await todo.find()
      res.render("todo", {todos:todos})
    }
    deleteToDo(req, res){

    }
}

module.exports=new ToDoController()
