import React,{useState} from 'react'


const App = () => {
  const [data,setData] =useState({
    username : '',
    email : '',
    password : '',
    confirmpassword : '',
    
  }) 
  const {username,email,password,confirmpassword} =data; //destructuring process in this we are assigning to below form input 
  const changeHandler = e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
    if (password === confirmpassword) {
      console.log(data)
    }
    else
console.log ("passwords mismatch")
  }
  return (
    <div>
      <center>
        <form>
          <input type ="text" name="username" value={username} onChange={changeHandler}/> <br />
          <input type ="text" name="email" value={email} onChange={changeHandler}/> <br />
          <input type ="password" name="password" value={password} onChange={changeHandler}/> <br />
          <input type ="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/> <br />
          <input type ="submit" name="submit" /> <br />
          

        </form>
      </center>
    </div>
  )
}

export default App
