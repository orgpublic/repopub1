import { Link, useNavigate } from "react-router";

const Routing = () => {
    const navigate = useNavigate();
   
    return (<>
        <button className="bg-blue-300 m-4 w-50 h-10 rounded-2xl" onClick={()=>{navigate('/usestatehook')}}>Go to UseState</button>
    </>)
}

export default Routing;