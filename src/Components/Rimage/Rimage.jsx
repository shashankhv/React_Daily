import React from 'react';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import {useMediaQuery , MediaQuery} from 'react-responsive'



function Rimage()
{
    const bigscreen = useMediaQuery({query : '(min-width : 1000px)'})
  const medium = useMediaQuery({query : '(min-width : 700px'})
  return(<div>
      <picture>
        {
          bigscreen ?
      <source srcSet={one} type="image/jpg"/>
      :
      medium ? <source srcSet={two} type="image/jpg"/>
      : <source srcSet={three} type="image/jpg"/>
        }
        <img/>
        </picture>
        </div>)
}
export default Rimage