import React, { useState, useEffect } from "react";
import Card from '../components/Card';
import { updateHighScores } from "../redux/actions";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Game = () => {
  const userName = useSelector(state => state.user).name;
  const [game, setGame] = useState([])
  const [flippedCount, setFlippedCount] = useState(0)
  const [flippedIndexes, setFlippedIndexes] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const colors = [
      '#F44336',
      '#F48FB1',
      '#EA80FC',
      '#5C6BC0',
      '#2962FF',
      '#26C6DA',
      '#00695C',
      '#C5E1A5',
      '#AFB42B',
      '#263238',
    ]
    const newGame = []
    for (let i = 0; i < 3; i++) {
      const firstOption = {
        id: 2 * i,
        colorId: i,
        color: colors[i],
        flipped: false,
      }
      const secondOption = {
        id: 2 * i + 1,
        colorId: i,
        color: colors[i],
        flipped: false,
      }

      newGame.push(firstOption)
      newGame.push(secondOption)
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5)
    setGame(shuffledGame)
  }, [])

  useEffect(() => {
    const finished = !game.some(card => !card.flipped)
    if (finished && game.length > 0) {
      const bestPossible = game.length
      const multiplier = 5
      const pointsLost = multiplier * (0.66 * flippedCount - bestPossible)

      let score
      if (pointsLost < 100) {
        score = Math.round(100 - pointsLost)
      } else {
        score = 0
      }

      dispatch(updateHighScores({ name: userName, value: score }))
      history.push('/game-complete')
    }
    // eslint-disable-next-line
  }, [game, flippedCount])

  if (flippedIndexes.length === 2) {
    const match = game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId

    if (match) {
      const newGame = [...game]
      newGame[flippedIndexes[0]].flipped = true
      newGame[flippedIndexes[1]].flipped = true
      setGame(newGame)

      const newIndexes = [...flippedIndexes]
      newIndexes.push(false)
      setFlippedIndexes(newIndexes)
    } else {
      const newIndexes = [...flippedIndexes]
      newIndexes.push(true)
      setFlippedIndexes(newIndexes)
    }
  }

  if (game.length === 0) return <div>loading...</div>
  else {
    return (
      <div className="cards">
        {game.map((card, index) => (
          <div className="card-container" key={index}>
            <Card
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default Game
