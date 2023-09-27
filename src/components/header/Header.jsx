import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="w-[95%] mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    
                    <div className="flex-1 mr-4">
                        <img className="w-[200px]" src="../../../public/resources/Logo.png" alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="flex gap-5 items-center font-semibold">
                            <Link to={"/"}><a className="hover:text-orange-600">Home</a></Link>
                            <Link to={"/donation"}><a className="hover:text-orange-600">Donation</a></Link>
                            <Link to={"/statistics"}><a className="hover:text-orange-600">Statistics</a></Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;