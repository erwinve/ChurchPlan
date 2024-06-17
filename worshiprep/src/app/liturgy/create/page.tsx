import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <form className='group relative'>
                <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 placeholder-slate-400 rounded-md py-2 pl-5 m-2 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Song name" placeholder="Song name..." />
                <div className='flex'>
                    <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 placeholder-slate-400 rounded-md py-2 pl-5 m-2 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Key" placeholder="Key" />
                    <div className='flex'>
                        <select className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 placeholder-slate-400 rounded-md p-2 m-2 ring-1 ring-slate-200 shadow-sm" aria-label="Time signature">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <span className='p-2 my-2'>/</span>
                        <select className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 placeholder-slate-400 rounded-md p-2 m-2 ring-1 ring-slate-200 shadow-sm" aria-label="Time signature">
                            <option>4</option>
                            <option>8</option>
                            <option>16</option>
                        </select>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Page;