import Link from 'next/link';
import Profile from './Profile';

export default function Navbar() {
    return (
        <div className="bg-neutral-900 w-screen h-16 shadow-md ">
            <div className='container mx-auto flex h-full'>
                <div className="my-auto">
                    <Link href="/"><h1>Green Guzzlers</h1></Link>
                </div>
                <div className='ml-auto flex'>
                    <Profile />
                </div>
            </div>
        </div>
    );
}