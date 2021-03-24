import React from 'react'
import {Train} from '../../api/train'
import TrainCard from './trainCard'

const mockTrain: Train[] = [
  {
    train_id: '',
    title: '2021夏季培训计划',
    desc: '这是一次针对xxx的培训',
    start_at: 2020,
    end_at: 2020,
    image: `${process.env.PUBLIC_URL}/images/train.png`,
  },
]

const TrainCom = () => {
  return (
    <>
      <div className="center-content train-card-group">
        {mockTrain.map((train, index) => (
          <TrainCard train={train} key={index} />
        ))}
      </div>
    </>
  )
}

export default TrainCom
