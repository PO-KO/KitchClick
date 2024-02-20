import "./mainSection.css";
import Navbar from "../navbar/Navbar";
import AD from "../ad/AD";
import SectionHeading from "../sectionHeading/SectionHeading";
import FilterButton from "../filterButton/FilterButton";
import Card from "../card/Card";
import asian from "../../assets/imgs/asian.jpg";

const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="Content">
        <AD />
        <section>
          <SectionHeading
            title={"American options"}
            text={"Lorem Ipsum is simply dummy text."}
          />
          <div className="Filters">
            <FilterButton type={"Tout"} />
            <FilterButton type={"Suchi"} />
          </div>
          <div className="Cards">
            <Card
              cuisine={asian}
              name={"Assiette asiatique"}
              brief={"Lorem Ipsum is simply dummy text."}
              price={"8.49"}
              supps={["cheddar", "cheddar", "cheddar"]}
            />
            <Card
              cuisine={asian}
              name={"Assiette asiatique"}
              brief={"Lorem Ipsum is simply dummy text."}
              price={"8.49"}
              supps={["cheddar", "cheddar", "cheddar"]}
            />
            <Card
              cuisine={asian}
              name={"Assiette asiatique"}
              brief={"Lorem Ipsum is simply dummy text."}
              price={"8.49"}
              supps={["cheddar", "cheddar", "cheddar"]}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
