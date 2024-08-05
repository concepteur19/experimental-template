import "../src/styles/App.css";
import Button from "./views/components/basis/button";
import Card from "./views/components/basis/card";
import Navbar from "./views/components/layout/Navbar";
import Sidebar from "./views/components/layout/Sidebar";
import RightSidebar from "./views/components/layout/RightSidebar";
import Main from "./views/components/layout/main";
import Interface2 from "./views/pages/interface2/index";

function App() {
  return (
    <div className="App app-container py-8 w-full h-fit px-20 flex flex-col space-y-16">
      {/* <h1 className="text-6xl">Experimental Template</h1>
      <Button addclass=" bg-red-600" /> */}
      {/* <Card
        borderColor="border-gray-300"
        title="Titre test"
        subTitle="Sous titre test"
        content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
      /> */}
      <div className=" w-full flex justify-center  text-primary">
        <div className="flex space-x-[2px] w-full justify-center ">
          <Sidebar></Sidebar>
          <div className="p-8 bg-background w-[50%] space-y-6">
            <Navbar></Navbar>
            <Main />
          </div>
          <RightSidebar></RightSidebar>
        </div>
      </div>

      <div className=" w-full flex justify-center text-newTxt  ">
        <Interface2></Interface2>
      </div>

      <div className="">
        <div>yo</div>

      </div>
    </div>
  );
}

export default App;
