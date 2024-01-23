import Banner from "../Banner/Banner"
import Latest from "../Latest/Latest"
import Trending from "../Trending/Trending"
import WhatsPopular from "../WhatsPopular/WhatsPopular"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trending></Trending>
      <Latest></Latest>
      <WhatsPopular></WhatsPopular>
    </div>
  )
}

export default Home