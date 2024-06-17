'use client';
import React, { useState } from 'react';

const Page: React.FC = () => {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    return (
        <div className="grid grid-cols-12 gap-4 h-full items-center justify-center text-lg">
            {step > 1 && (
                <button onClick={handlePrevious} className="col-start-2 col-span-1 rounded-full bg-white p-4 shadow-sm flex items-center justify-center">
                    <svg className="h-5 w-5 ml-2 arrow1 transform rotate-180 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    Previous
                </button>
            )}

            <div className="col-start-4 col-span-6">
                <h1 className="text-4xl font-bold mb-10 text-center">{step}. Create a new song</h1>
                <form className='group relative'>
                    {step === 1 && (
                        <>
                            <label htmlFor="song-name" className="block text-gray-700 my-2">Song name</label>
                            <input id="song-name" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 mb-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Song name" placeholder="Song name" />
                            <label htmlFor="song-name-2" className="block text-gray-700 my-2">Artist</label>
                            <input id="song-name-2" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 mb-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Song name" placeholder="Artist" />
                            <div className='flex w-full mb-4'>
                                <div className='w-1/2 mr-2'>
                                    <label htmlFor="key" className="block text-gray-70 my-2">Key</label>
                                    <input id="key" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Key" placeholder="Key" />
                                </div>
                                <div className='w-1/2 ml-2'>
                                    <label htmlFor="time-signature" className="block text-gray-700 my-2">Time signature</label>
                                    <select id="time-signature" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 ring-1 ring-slate-200 shadow-sm timesign" aria-label="Time signature">
                                        <option>2/4</option>
                                        <option>3/4</option>
                                        <option>4/4</option>
                                        <option>5/4</option>
                                        <option>6/4</option>
                                        <option>6/8</option>
                                        <option>7/8</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <></>
                    )}
                    {step === 3 && (
                        <></>
                    )}
                </form>
            </div>

            <button onClick={handleContinue} className="col-start-11 col-span-1 rounded-full bg-white p-4 shadow-sm flex items-center justify-center">
                Continue
                <svg className="h-5 w-5 ml-2 arrow1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
        </div>
    );
};

export default Page;