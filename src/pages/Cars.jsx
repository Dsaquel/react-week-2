import { useState } from 'react'
import CarsList from '../components/cars/CarsList'
import FormCar from '../components/cars/FormCar'

const Cars = () => {
  const [cars, setCars] = useState([])

  return (
    <div>
      <h1>cars</h1>
      <FormCar setCars={setCars} />
      <CarsList items={cars} />
    </div>
  )
}

export default Cars
