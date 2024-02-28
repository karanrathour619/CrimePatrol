import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection, doc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase-config';

function Reports() {
    const [reportList, setReportList] = useState([]);
    const reportsCollectionRef = collection(db, "reports");
    const currentDate = new Date().toLocaleDateString();

    useEffect(() => {
        const getReports = async () => {
            const data = await getDocs(reportsCollectionRef);
            setReportList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getReports();
    }, []);

    const handleDislike = async (reportId) => {
        const reportRef = doc(db, "reports", reportId);
        // Update dislike count in Firestore
        await updateDoc(reportRef, {
            dislikes: (reportList.find(report => report.id === reportId).dislikes || 0) + 1
        });
        // Update dislike count in local state
        setReportList(prevReportList => {
            return prevReportList.map(prevReport => {
                if (prevReport.id === reportId) {
                    return { ...prevReport, dislikes: (prevReport.dislikes || 0) + 1 };
                }
                return prevReport;
            });
        });
    };



    return (
        <div className='reportPage pt-16'> 
            {reportList.map((report, isAuth) => (
                <div className='report' key={report.id}> 
                    <div className='pt-[1rem] bg-slate-800'>
                        <div id="alertcontainer" className='flex flex-wrap items-center sm:px-[4rem] p-[2rem] justify-center'>
                            <div className='m-2 sm:p-8 p-6 max-w-[30rem] rounded-md bg-slate-600'>
                                <div className='font-bold text-white text-lg'>{report.typeOfCrime}</div>
                                <div className='font-s pb-4 text-slate-300 text-sm'> {report.name} </div>
                                <div className='text-white pb-4 text-sm'>{report.crimeDetail}</div>
                                <div className='text-slate-300 text-sm'>{currentDate}</div>
                                <div className='flex justify-between text-white flex-wrap'>
                                    <div className='flex text-green-500 '>
                                        <Link href="#" className='hover:underline text-sm'>{report.city}</Link>
                                        <div className='px-1 text-sm'>,</div>
                                        <Link href="#" className='hover:underline text-sm'>{report.state}</Link>
                                    </div>
                                    <div className='flex items-center text-sm'>
                                        <div className='text-red-600 pr-1'>{report.dislikes || 0}</div>
                                        <div className='text-red-600 hover:text-red-700 font-semibold cursor-pointer' onClick={() => handleDislike(report.id)} >Dislike</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reports;
