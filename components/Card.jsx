import mark from '../src/assets/images/avatar-mark-webber.webp'
import angela from '../src/assets/images/avatar-angela-gray.webp'
import jacob from '../src/assets/images/avatar-jacob-thompson.webp'
import rizky from '../src/assets/images/avatar-rizky-hasanuddin.webp'
import kimberly from '../src/assets/images/avatar-kimberly-smith.webp'
import nathan from '../src/assets/images/avatar-nathan-peterson.webp'
import anna from '../src/assets/images/avatar-anna-kim.webp'
import img from '../src/assets/images/image-chess.webp'

const Card = (prop) => {
  return (
    <div className='card'>
      <img src={prop.cardImg} alt="" className="cardImg" />
      <div className="details">
        <p><span className="name">{prop.name}</span> {prop.action} <span className='myPost'>{prop.myPost}</span> <span className="someGroup">{prop.someGroup}</span>
        </p>
        <p className="time">{prop.time}</p>
        <p className="more">
        {prop.more}
        </p>
      </div>
      <img src={prop.img} alt="" className="secImg" />
    </div>
  )
}

export default Card