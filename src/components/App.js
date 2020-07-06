import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import PlayingField from '../redux/containers/PlayingField'

const App = ({ addCells, paintCell }) => {
  const [value, setValue] = useState('3')

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
          type="number"
          min={3}
          max={9}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
        />
        <Button variant="contained" onClick={handleSubmit} type="submit">
          Создать
        </Button>
        <Button variant="contained" onClick={() => paintCell()}>
          Закрасить
        </Button>
      </header>

      <PlayingField />
    </div>
  )
}

App.propTypes = {
  addCells: PropTypes.func.isRequired,
  paintCell: PropTypes.func.isRequired,
}

export default App
