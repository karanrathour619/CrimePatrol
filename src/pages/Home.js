import React from 'react';

function Home() {
  return (
    <>
    <div className="relative">
        <img src={require('../components/images/resizeMap.png')} className="w-full h-3/6 object-cover opacity-50 pt-16" alt="" />
        <h1 className="absolute top-40 left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold text-center">
            Find Crime in Your Neighbourhood
        </h1>
        <div className="absolute top-64 left-1/2 transform -translate-x-1/2">
            <button className="text-white font-semibold bg-blue-500 px-4 py-2 rounded mr-4">View crimes near me</button>
            
            <input type="text" className="text-white bg-gray-800 px-4 py-2 rounded" placeholder="Search for locality/city/state" />
        </div>
      </div>

      <div className="flex justify-center items-center ">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 mt-10">What is CrimePatrol?</h2>
        <img src="" alt="" />
        <h3 className="text-lg my-2">
          CrimePatrol is a public facing crime app and crime alert service. With CrimePatrol, <br /> it’s easier than ever to check crime anywhere in India. <br/>
          Our goal is to provide the most accurate and timely crime information to the public. <br/>
          CrimePatrol allows you to easily look up city and country crime data 
          and reports <br />-- all the way down to local neighborhood statistics.
        </h3>
      </div>
    </div>

    </>
  );
}

export default Home;
