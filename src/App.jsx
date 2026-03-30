import {useState,useRef,useEffect} from 'react';
import {motion, AnimatePresence} from "framer-motion";
const App = () => {
  const [value, setValue] = useState('');
  const [pass, setPass] = useState(null);
  const [showError, setError] = useState(false);

  function submit(e){
    e.preventDefault()
    setError(value.length < 8)
  }

  useEffect(() => {
  if (showError) {
    const timer = setTimeout(() => {
      setError(false);
    }, 4500); 

    // Cleanup: If the user manually closes it or logs in, kill the timer
    return () => clearTimeout(timer);
  }
}, [showError]);
  
  return (
    <div>
     <AnimatePresence>
      {showError && (
     <motion.div
        className="errorBox"
        key="error"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.6 }}
    >
      <p>Please fix the errors before submitting</p>
      <span className="bar"></span>
    </motion.div>
  )}
  </AnimatePresence>

    <div className="container">
      <h1>Login</h1>
      <h4>Welcome to The Real World</h4>
      <form>
        <label>Email:</label>
        <input type="email"></input>
        <label>Password: </label>
        <input type="password" 
               onChange={(e)=> setValue(e.target.value)}
               value={value}
        />
      {value.length > 0 && value.length < 8 && (
        <p className='errorMessage'>bka</p>
      )}
        <button type="submit" onClick={submit}>Login</button>
      </form>
    </div>
  </div>
  )
}
export default App;