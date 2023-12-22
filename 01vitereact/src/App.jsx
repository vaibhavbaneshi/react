function App() {
  const username = 'This is a variable'
  return (
    // <div>
    //   <Hello/>
    //   <p>This is a para</p>
    //   <h3>This is an example of passign multiple elements inside 1 element</h3>
    // </div>

    //return a fragment
    <> 
      <Hello/>
      <p>This is a para {username}</p>
      <h3>This is an example of passign multiple elements inside 1 element</h3>
    </>

    //in the return user can only return an evaluatd function
  )
}

export default App
