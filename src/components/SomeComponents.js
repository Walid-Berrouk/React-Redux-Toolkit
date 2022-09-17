import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, incrementByAmount } from "../redux/slices/counter";

import { signIn, signOut} from '../redux/slices/logged'

function SomeComponent1() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {   
     dispatch(decrement())
  }

  return (
    <div style={{padding: 20, border: "2px solid black"}}>
      <h3>I'm The first Child Component, I'm Charged of setting the Counter :</h3>
      <p>Counter : {counter.value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>

    </div>
  )
}

function SomeComponent2() {

  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch()
  
  const handleSignIn = () => {
    dispatch(signIn())
  }

  const handleSignOut = () => {
    dispatch(signOut())
  }

  console.log(logged.isLoggedIn)


  return (
    <div style={{padding: 20, border: "2px solid black"}}>
      <h3>I'm The Second Child Component, I'm Charged of the Log In Part :</h3>
      <p>I'm Logged: {logged.isLoggedIn ? "Yes" : "No"}</p>
      {logged.isLoggedIn ?
        <div>
          <h1>Hi, I'm Walid, Nice to meet You !</h1>
        </div>
        :
        <></>

      }
      <button onClick={handleSignIn}>Log In</button>
      <button onClick={handleSignOut}>Log Out</button>

    </div>
  )
}

export {
    SomeComponent1,
    SomeComponent2
}

