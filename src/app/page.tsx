
import HomePage from "../components/HomePage/HomePage"
import AboutPage from "../components/Abouthotel/Abouthotel"
import MyFacilities from "../components/MyFacilities/MyFacilities"
import RoomsSuites from "../components/RoomsSuites/RoomsSuites"
export default function Home() {
  return (
<div className="">
<HomePage/>
       <RoomsSuites/>
        <AboutPage/>
        <MyFacilities/>
</div>
  );
}
