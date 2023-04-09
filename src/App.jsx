
import {useSelector, useDispatch} from "react-redux"
import { decreament, increament, increamentByAmount } from './redux/reader'

function App() {
  const {read} = useSelector((state)=> state.reader)
  const dispatch = useDispatch()

  return (
    <div className="App">
    <div>
       <h3>The read is : {read}</h3>
      <section>
        <article className="two-btn">
        <button className='increament' onClick={()=>dispatch(increament())}>increament</button>
       <button className='decreament' onClick={()=>dispatch(decreament())}>decreament</button>
        </article>
       <article className="one-btn">
       <button className='multiple' onClick={()=>dispatch(increamentByAmount(2))}>increamentByAmount</button>
       </article>
      </section>
    </div>
    </div>
  )
}

export default App
