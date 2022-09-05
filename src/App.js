import { useState } from 'react'
import './App.css'
import Button from './сomponents/Button'
import Counter from './сomponents/Counter'

function App() {
  const [count, setCount] = useState(0)
  // стандартная деструктуризация при запуске setCount изменяемтся count
  // начальное значение count 0
  const incrementCount = () => {
    setCount(count + 1)
  }
  // прибавление в счетчику

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
    </div>
  // тут мы присваиваем свойство-функцию которая увеличивает наш счетчик
  )

}

export default App
