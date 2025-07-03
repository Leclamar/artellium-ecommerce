import Link from 'next/link'
import Tag from './Tag'

const Commission = () => {
    return(
        <>
            <main className='rounded-sm p-5 max-w-max shadow-md'> 
                <div id='image-16/9' className='w-70 my-4'>
                    <img className=' rounded-sm object-cover aspect-square'
                        src="/dummy-img/yeonjun-txt.jpeg"
                        alt="artwork-image">
                    </img>
                </div>

                <div>
                    <header>
                        <h3 className='font-bold text-xl mb-3'>Description</h3>
                    </header>
                
                    <div className='px-3 py-1 btn-light-blue rounded-md text-sm max-w-max'>
                        <span>7</span> Slots Available
                    </div>

                    <div className='my-4 flex max-w-max'>
                        <div className="mr-3" >
                            <Tag />
                        </div>
                        <div className="mr-3" >
                            <Tag />
                        </div>
                        <div className="mr-3" >
                            <Tag />
                        </div>
                    </div>

                    <div className='w-full text-center mt-10'>
                        <button className='justrify-self-center border rounded-lg px-16 py-3 text-sm '>See More Detail</button>
                    </div>
                    
                </div>

                
            </main>
        </>
    )
}

export default Commission