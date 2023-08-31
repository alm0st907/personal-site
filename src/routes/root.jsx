import {Link} from "react-router-dom";
import MenuBar from "../Components/MenuBar";

export default function Root() {
    return (
        <div>
            <MenuBar></MenuBar>
            <Link to={'/'}>Go back where ya' came from</Link>
        </div>
    );
}
