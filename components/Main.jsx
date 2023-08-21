import Card from './Card'
import mark from '../src/assets/images/avatar-mark-webber.webp'
import angela from '../src/assets/images/avatar-angela-gray.webp'
import jacob from '../src/assets/images/avatar-jacob-thompson.webp'
import rizky from '../src/assets/images/avatar-rizky-hasanuddin.webp'
import kimberly from '../src/assets/images/avatar-kimberly-smith.webp'
import nathan from '../src/assets/images/avatar-nathan-peterson.webp'
import anna from '../src/assets/images/avatar-anna-kim.webp'
import img from '../src/assets/images/image-chess.webp'

const Main = () => {
  return (
    <div>
      <Card cardImg={mark}  name={"Mark Webber"} action={"reacted to your recent post"} myPost={'My first tournament today!'} time={"1m ago"} />

      <Card cardImg={angela}  name={"Angela Gray"} action={"followed you"} myPost={''} someGroup={""} more={''} img={''} time={"5m ago"} />

      <Card cardImg={jacob}  name={"Jacob Thompson"} action={"has joined your group"} myPost={''} someGroup={"Chess Club"} more={''} img={''} time={"1 day ago"} />

      <Card cardImg={rizky}  name={"Rizky Hasanuddin"} action={"sent you a private message"} myPost={''} someGroup={""} more={"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."} img={''} time={"5 days ago"} />

      <Card cardImg={kimberly}  name={"Kimberly Smith"} action={"commented on your picture"} myPost={''} someGroup={""} more={''} img={img} time={"1 week ago"} />

      <Card cardImg={nathan}  name={"Nathan Peterson"} action={"reacted to your recent post"} myPost={'5 end-game strategies to increase your win rate'} someGroup={""} more={''} img={''} time={"2 weeks ago"} />

      <Card cardImg={jacob}  name={"Anna Kim"} action={"left the group Chess Club"} myPost={''} someGroup={"Chess Club"} more={''} img={''} time={"2 weeks ago"} />
    </div>
  )
}

export default Main