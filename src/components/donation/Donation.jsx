import { useEffect, useState } from "react";
import Donations from "./Donations";

const Donation = () => {
    const [donation, setDonations] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'))
        
        if(donationItems) {
            setDonations(donationItems)
        } else {
            setNotFound("No Data Found")
        }
    }, [])

   

    return (
        <div className="w-[95%] mx-auto pt-12">
            {notFound ? <p className="font-bold text-xl h-[60vh] flex justify-center items-center">No data found</p> : 
            <div className="grid grid-cols-2 gap-4">
                
                {
                    donation?.slice(0, dataLength).map(item => <Donations key={item.id} item={item}></Donations>)
                }
                
            </div>}
            <div className={dataLength === donation.length || donation.length < 4 ? 'hidden': ''}>
            <div className="flex justify-center">
            <button onClick={() => setDataLength(donation.length)} className="bg-[#009444] px-3 py-2 rounded-lg text-center text-white">See all </button>
            </div>
            </div>
            
            
        </div>
    );
};

export default Donation;