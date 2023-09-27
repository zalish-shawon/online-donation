import { useEffect, useState } from "react";
import DoanteCards from "../donateCards/DoanteCards";
import SearchData from "../searchData/SearchData";


const Home = () => {
    const [donations, setDonations] = useState([])
    const [category, setCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    


    useEffect(() => {
        fetch('../../../public/donate.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        
      };


      const handleSearch = () => {
        
        const newFilteredData = donations.filter((item) =>
        
        item.category.toLowerCase() === category.toLowerCase()
        );
        
    setFilteredData(newFilteredData);
};

console.log(filteredData);

    return (
        <div className=" w-[95%] mx-auto">

            <div className="hero h-[400px] mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/kQzxK7X/Clothing.png)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                
                <div>
                <h1 className="text-4xl font-bold text-center text-gray-300 mb-5">I Grow By Helping People In Need</h1>
                    <div className=" flex gap-2 justify-center items-center">
                    <input onChange={handleCategoryChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button onClick={handleSearch} className="btn bg-[#FF444A] text-white">Search</button>
                    </div>
                </div>
            </div>
                
            
            

            <div className= {filteredData.length > 0 ? 'hidden' : ''}>
            <div  className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-14">
                
                {
                    donations?.map(item => <DoanteCards key={item.id} item={item}></DoanteCards>)
                }
                </div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-14">
                {
                    filteredData.map(item => <SearchData key={item.id} item={item}></SearchData>)
                }
            </div>
        </div>
    );
};

export default Home;