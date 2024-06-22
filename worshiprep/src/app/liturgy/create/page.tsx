'use client';
import React, { useState } from 'react';

const Page: React.FC = () => {
    const [step, setStep] = useState(1);
    const [file, setFile] = useState<File>();

    const handleContinue = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const submitSong = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
        console.log(submitter.value)
        if (submitter.value !== "submit") {
            console.log(`not submitted`)
            return;
        }

        try {
            const data = new FormData();
            console.log(`submitted`);
            if (file) {
                console.log(file);
                data.set("file", file);
            }

            const response = await fetch("/api/upload", {
                method: "POST",
                body: data
            });

            if (!response.ok) throw new Error(await response.text());
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
    <form onSubmit={submitSong} className='flex justify-around items-center w-full h-full group relative'>

        
        <button onClick={handlePrevious} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step <= 1 ? 'opacity-0' : ''}`}>
            <svg className="h-5 w-5 ml-2 arrow1 transform rotate-180 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            Previous
        </button>
        

        <div className="flex-grow max-w-50 mx-4">
            <h1 className="text-4xl font-bold mb-10 text-center">{step}. 
            {step === 1 && (" Create a new song")}
            {step === 2 && (" Add chordsheet")}
            </h1>
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
                                <select id="time-signature" defaultValue={"4/4"} className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 ring-1 ring-slate-200 shadow-sm timesign" aria-label="Time signature">
                                    <option value="2/4">2/4</option>
                                    <option value="3/4">3/4</option>
                                    <option value="4/4">4/4</option>
                                    <option value="5/4">5/4</option>
                                    <option value="6/4">6/4</option>
                                    <option value="6/8">6/8</option>
                                    <option value="7/8">7/8</option>
                                </select>
                            </div>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <div className="relative w-full p-20 flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 font-medium hover:border-blue-500 hover:text-blue-500 cursor-pointer">
                        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <span>Upload a file</span> {/* Placeholder text or elements */}
                    </div>
                )}
            
            </div>


            <button type="submit" name='submit' value={"submit"} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step !== 2 ? 'hidden' : 'flex'}`}>
                Submit
                <svg className="h-4 w-4 md:h-5 md:w-5 ml-2 arrow1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
                
            <button onClick={handleContinue} name='continue' value={"continue"} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step < 2 ? 'flex' : 'hidden'}`}>
                Continue
                <svg className={`h-4 w-4 md:h-5 md:w-5 ml-2 arrow1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>

        </form>
    );
};

export default Page;