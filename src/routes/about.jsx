import MenuBar from "../Components/MenuBar.jsx";

export default function About(){
    return(
      <div>
          <MenuBar></MenuBar>
          <h1 className="text-3xl font-bold flex items-center justify-center">
              This is where I'd write some things about myself.
          </h1>
          <div>
              I haven't gotten to it yet though
          </div>
      </div>
    );
}
