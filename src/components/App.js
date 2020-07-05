import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import PlayingField from './PlayingField'

const App = ({ addCells, cells }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value && value.trim()) {
      addCells(value)
    }

    setValue('')
  }

  return (
    <div className="container">
      <header className="header">
        <span className="size">Размерность матрицы</span>
        <input
          className="input"
          type="number"
          min={3}
          max={9}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
          pattern="[0-9]{1}"
        />
        <Button variant="contained" onClick={handleSubmit} type="submit">
          Создать
        </Button>
        <Button variant="contained">Закрасить</Button>
      </header>

      <PlayingField count={value} cells={cells} />
    </div>
  )
}

export default App
