import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function Submit({ isAuth }) {

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [locality, setLocality] = useState('');
    const [typeOfCrime, setTypeOfCrime] = useState('');
    const [crimeDetail, setCrimeDetail] = useState('');

    const reportsCollectionRef = collection(db, "reports")
    let navigate = useNavigate();

    const submitReport = async() => {
        await addDoc(reportsCollectionRef, { 
            name, state, city, locality, 
            typeOfCrime, crimeDetail, 
            author: {name: auth.currentUser.displayName, 
                id: auth.currentUser.uid} 
        });
        navigate("/");
    }

    useEffect(() => {
        if(!isAuth){
            alert("Login to continue")
            navigate("/login");
        }
    }, [] )

  return (
    <>
    <div className="bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center w-4/5 pt-10">
            <span className="text-2xl font-light">Submit a Crime Report</span>
            <div className="h-2 bg-indigo-400 rounded-t-md mt-5"></div>
            <div className="relative bg-white shadow-md sm:rounded-lg text-left flex flex-col sm:flex-row sm:justify-between gap-3">
                <div className="w-full sm:w-1/2 px-4 pt-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                        <input type="text" name="name" id="name" className="border w-full h-10 px-3 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600" 
                            onChange={(e) => 
                                setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-sm font-semibold">State</label>
                        <select onChange={(e) => 
                                setState(e.target.value)}  id="state" name="state" className="border w-full h-10 px-3 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600">
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-semibold">City</label>
                        <input onChange={(e) => 
                                setCity(e.target.value)} type="text" name="city" id="city" className="border w-full h-10 px-3 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600" />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="locality" className="block text-sm font-semibold">Locality</label>
                        <input onChange={(e) => 
                                setLocality(e.target.value)} type="text" name="locality" id="locality" className="border w-full h-10 px-3 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600" />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 pt-4">
                    <div className="mb-4">
                        <label htmlFor="typeOfCrime" className="block text-sm font-semibold">Type of Crime</label>
                        <select onChange={(e) => 
                                setTypeOfCrime(e.target.value)} id="typeOfCrime" name="typeOfCrime" className="border w-full h-10 px-3 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600">
                        <option value="">Select</option>
                        <option value="Assault">Assault</option>
                        <option value="Burglary">Burglary</option>
                        <option value="Robbery">Robbery</option>
                        <option value="Theft">Theft</option>
                        <option value="Fraud">Fraud</option>
                        <option value="Vandalism">Vandalism</option>
                        <option value="Kidnapping">Kidnapping</option>
                        <option value="Sexual Assault">Sexual Assault</option>
                        <option value="Homicide">Homicide</option>
                        <option value="Drug Offense">Drug Offense</option>
                        <option value="Arson">Arson</option>
                        <option value="Cybercrime">Cybercrime</option>
                        <option value="Domestic Violence">Domestic Violence</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="crimeDetail" className="block text-sm font-semibold">Crime Detail</label>
                        <textarea onChange={(e) => 
                                setCrimeDetail(e.target.value)} id="crimeDetail" name="crimeDetail" rows="8" className="border w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"></textarea>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <button onClick={submitReport} className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Submit</button>
            </div>
        </div>
    </div>



    </>
  )
}

export default Submit