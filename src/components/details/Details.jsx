import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const Details = () => {
    const donations = useLoaderData()
    const {id} = useParams()
   const donate = donations.find(item => item.id == id)
  
   const handleDonation = () => {

    const addedDonations = []

    const donationItems = JSON.parse(localStorage.getItem('donations'))
    
    if(!donationItems) {
        addedDonations.push(donate)
        localStorage.setItem('donations', JSON.stringify(addedDonations))
        swal("Good job!", "Donation added successfully!", "success");

    } else {

        const isExits = donationItems.find(item => item.id == id)

        if (!isExits) {
            addedDonations.push(...donationItems, donate)
            localStorage.setItem('donations', JSON.stringify(addedDonations))
            swal("Good job!", "Donation added successfully!", "success");
        } else {
            swal("Oops!", "Already added!", "error");
        }
        

    }



     
   }
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-6">Donation details</h1>
            <div className="flex flex-col justify-center items-center">
                <img className="w-[650px]" src={donate.picture} alt="" />
                <div className="relative bottom-14  ">
                    <div className="bg-slate-700 bg-opacity-50 w-[650px] h-14 mx-auto ">
                    <button onClick={handleDonation} style={{backgroundColor: `${donate.btn_color}`}} className="rounded-lg p-2 text-white mt-2 ml-2">Donate ${donate.price}</button>
                    </div>
                    
                </div>
            </div>
            <div className="-mt-10">
            <h1 className="font-bold text-4xl mb-3 text-center">{donate.title}</h1>
            <p className="text-center px-3 pb-5">{donate.description}</p>
            </div>
            
        </div>
    );
};

export default Details;