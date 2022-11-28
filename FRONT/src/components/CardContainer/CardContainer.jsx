import React, {useContext} from 'react'
import Card from '../Card/Card'
import { AppContext } from '../../provider/appContext'

const CardContainer = () => {

    const { movies, srole } = useContext(AppContext);

  return (
    <div className='row'>
            {
                movies?.map((movie, index) => {
                    return <Card movie={movie} key={index} />
                })
            }
    </div>
        
  )
}

export default CardContainer