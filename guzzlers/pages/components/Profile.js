export default function Profile() {
    return (
        <div className='my-auto bg-neutral-800 py-1 px-2 rounded-md flex hover:cursor-pointer' onClick={() => signIn()}>
            <h1 className='text-2xl'>Log In</h1>
        </div>
    )
}

function signIn() {
    console.log("hi")
}

