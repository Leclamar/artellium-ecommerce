import Link from 'next/link'
import OrderStatus from './OrderStatus'

const OrderContainer = () => {
    return(
        <>
            <main className='justify-self-center flex items-stretch p-5 rounded-md max-w-max shadow-md'>
                <div className='w-40'>
                    <img className=' rounded-sm object-cover aspect-square'
                        src="/dummy-img/yeonjun-txt.jpeg"
                        alt="artwork-image">
                    </img>
                </div>
                
                <section className='self-start text-start ml-4 min-w-70 max-w-70'>
                    <header>
                        <h1 className='text-xl'>Description</h1>
                        <h3 className='font-light'>Artist's username</h3>
                    </header>

                    <div className='my-3.5 text-sm flex font-light'>
                        <label>Status:</label>
                        <div className='mx-1'>
                            <OrderStatus status ="in-progress" />
                        </div>
                    </div>

                    <div className='text-sm flex font-bold'>
                        <label>Price:</label>
                        <div className='mx-1'>IDR<span>4,000,000</span></div>
                    </div>
                </section>

                <div className='flex flex-col justify-between text-xs'>
                    <time className='opacity-30'><span>06/08/2020</span> - <span>06/09/2028</span></time>
                    <button className='border btn-dark-blue flex py-2 px-4 self-center'>
                        <svg className='size-5 mr-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"/></svg>
                        <div>Chat <span>Bestie</span></div>
                    </button>
                </div>
            </main>
            
        </>
    )
}

export default OrderContainer