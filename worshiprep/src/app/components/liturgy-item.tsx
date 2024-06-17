import Link from "next/link";

interface LiturgyItemProps {
  title: string;
  songKey: string;
  timeSignature: string;
  bpm: string;
  dateAdded: string;
  position: 'top' | 'middle' | 'bottom' | 'only';
}

export const LiturgyItem: React.FC<LiturgyItemProps> = ({ title, songKey, timeSignature, bpm, dateAdded, position }) => {
  let borderClasses = 'border-2';
  if (position === 'top') borderClasses = 'border-b-0 rounded-t-lg';
  if (position === 'middle') borderClasses = 'rounded-none';
  if (position === 'bottom') borderClasses = 'border-t-0 rounded-b-lg';
  if (position === 'only') borderClasses = '';

  return (
    <li>
      <Link href={`liturgy/1`} className={`hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center border-2 ${borderClasses} text-sm leading-6 text-slate-900 font-medium py-3`}>
        <div className="w-full px-5 text-left grid grid-cols-8">
          <div className="col-span-4">{title}</div>
          <div className="col-span-1">{songKey}</div>
          <div className="col-span-1">{timeSignature}</div>
          <div className="col-span-1">{bpm}</div>
          <div className="col-span-1 text-right">{dateAdded}</div>
        </div>
      </Link>
    </li>
  );
};