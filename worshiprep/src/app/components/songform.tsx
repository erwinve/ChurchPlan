"use client";
import { useState } from "react";
import { Song } from '@/app/lib/definitions';

interface SongFormProps {
    id: string;
    song: Song;
  }

export const SongForm: React.FC<SongFormProps> = ({ song, id }) => {
    const [step, setStep] = useState(1);
    const [src, setSrc] = useState("");
    const [filename, setFilename] = useState<string | null>(null);
    const currentPage = window.location.href;
    let pageMode;

    if (currentPage.includes('edit')) {
    pageMode = 'edit';
    } else if (currentPage.includes('create')) {
    pageMode = 'create';
    } else {
    pageMode = 'unknown'; // Or any default value you prefer
    }
    console.log(pageMode);
    console.log(src);
    console.log((song.chordsheet === ''));
    console.log(typeof song.chordsheet);
    console.log(song.chordsheet);
    console.log((song.chordsheet === '' && src === ''));

    const handleContinue = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    function previewImage(this: any) {
        console.log(this);
        var fileInput = document.getElementById("file") as HTMLInputElement;
        if (fileInput !== null) {
            var file = fileInput.files;
            if (file && file.length > 0) {
                var fileReader = new FileReader()
    
                fileReader.onload = function (event) {
                    if (event.target !== null) {
                        setSrc(event.target.result as string);
                    }
                }
                setFilename(file[0].name); // Set filename here
    
                fileReader.readAsDataURL(file[0])
            }
        }
    }

    return (
        <div className="flex justify-around items-center w-full h-full group relative">
            <button type='button' onClick={handlePrevious} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step <= 1 ? 'opacity-0' : ''}`}>
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
                <div className={step === 1 ? 'block' : 'hidden'}>
                    <label htmlFor="song-name" className="block text-gray-700 my-2">Song name</label>
                    <input name='song-name' defaultValue={song.songname} id="song-name" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 mb-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Song name" placeholder="Song name" />
                    <label htmlFor="artist-name" className="block text-gray-700 my-2">Artist</label>
                    <input name='artist-name' defaultValue={song.artistname} id="artist-name" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 mb-4 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Artist" placeholder="Artist" />
                    
                    {/* Hidden id to pass along to the formdata */}
                    <input type="hidden" name="itemId" value={id} />
                    
                    <div className='flex w-full mb-4'>
                        <div className='w-1/2 mr-2'>
                            <label htmlFor="key" className="block text-gray-70 my-2">Key</label>
                            <input name='key' defaultValue={song.key} id="key" className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Key" placeholder="Key" />
                        </div>
                        <div className='w-1/2 ml-2'>
                            <label htmlFor="time-signature" className="block text-gray-700 my-2">Time signature</label>
                            <select name='timesign' id="time-signature" defaultValue={song.timesign} className="w-full focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 placeholder-slate-400 rounded-md pl-5 py-5 ring-1 ring-slate-200 shadow-sm timesign" aria-label="Time signature">
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
                </div>

                <div className={step === 2 ? 'block' : 'hidden'}>
                    <div className="relative w-full p-20 flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 font-medium hover:border-blue-500 hover:text-blue-500 cursor-pointer">
                        <input onChange={previewImage} type="file" id='file' name="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />                        
                        {
                        pageMode === 'create' ?
                            <span>{src === '' && (song.chordsheet === '' || song.chordsheet === null) ? 'Upload a pdf' : filename}</span> 
                            :
                            <span>{src === '' && (song.chordsheet === '' || song.chordsheet === null) ? 'Upload a pdf' : song.chordsheet}</span>
                        }

                    </div>
                </div>
                
            </div>


            <button type="submit" name='submit' value={"submit"} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step !== 2 ? 'hidden' : 'flex'}`}>
                Submit
                <svg className="h-4 w-4 md:h-5 md:w-5 ml-2 arrow1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
                
            <button type='button' onClick={handleContinue} name='continue' value={"continue"} className={`rounded-full bg-white p-4 shadow-sm flex items-center justify-center ${step < 2 ? 'flex' : 'hidden'}`}>
                Continue
                <svg className={`h-4 w-4 md:h-5 md:w-5 ml-2 arrow1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
        </div>
    );
};