
import classes from "./Input.module.css"
const Input = () => {
  return (
    
          <form className={classes.form}>
          <label className={classes.label}>Amount:</label>
          <input className={classes.input}></input>
          <button className={classes.button}>+ Add</button>
          </form>
      
    
  )
}

export default Input
