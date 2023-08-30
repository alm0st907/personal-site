import {Link} from "react-router-dom";

export default function Root() {
    return (
    <div>
        <h1 className="text-3xl font-bold flex items-center justify-center">
            Absolutely nothing is here yet...
        </h1>
        <div className="text-3xl p-2 flex items-center justify-center">
            I'll get around to it :)
        </div>
        <Link to={'/'}>Go back where ya' came from</Link>
    </div>
  );
}
