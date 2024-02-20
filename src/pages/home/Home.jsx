import MainSection from "../../components/main/MainSection";
import Aside from "../../components/aside/Aside";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Aside />
      <MainSection />
      <Rightbar />
    </div>
  );
};

export default Home;
