import Link from 'next/link'

const Artwork = () => {
    return(
        <>
            <main className='rounded-sm p-5 max-w-max shadow-md'>
                <div className='flex' id='user'>
                    <div className='size-9 bg-black mr-2 rounded-full' id='pfp'></div>
                    <a className='font-medium' id='username'>Username</a>
                </div>
                    
                <div id='image-16/9' className='w-70 my-4'>
                    <img className='rounded-sm object-cover aspect-square'
                        src="/dummy-img/felix-skz.jpeg"
                        alt="artwork-image">
                    </img>
                </div>

                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='flex mr-4'>
                            <button>
                                <svg className='size-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/></svg>
                            </button>
                            <div className='ml-2'>432</div>
                        </div>
                        
                        <div className='flex'>
                            <button>
                                <svg className='size-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM3 17V3h18v17.077L17.923 17z"/></svg>
                            </button>
                            <div className='ml-2'>3</div>
                        </div>
                    </div>
                    <a className='underline text-sm'>See more</a>
                </div>

            </main>
        </>
    )
}

export default Artwork