import Navbar from '../../components/Navbar'


const Dashboard = () => {
    return(
        <>
            <Navbar />

            <main>
                <header className='text-3xl mt-8 text-center'>
                    Dashboard
                </header>
                <article className='mt-10 flex flex-wrap flex-col-4 justify-between'>
                    
                    <div className='border py-3 text-center text-sm rounded-md w-6/25'>
                        <header>Commission Request</header>
                        <div>

                        </div>
                    </div>

                    <div className='border py-3 text-center rounded-md w-6/25'>
                        <header>Commission Request</header>
                        <div>

                        </div>
                    </div>

                    <div className='border py-3 text-center rounded-md w-6/25'>
                        <header>Commission Request</header>
                        <div>

                        </div>
                    </div>

                    <div className='border py-3 text-center rounded-md w-6/25'>
                        <header>Commission Request</header>
                        <div>

                        </div>
                    </div>
                </article>  

                <article>
                    <div className='my-10 max-w-max p-4'>
                        <header className='text-xl my-2'>Total pendapatan</header>
                        <div>IDR <span>7,000,000</span></div>
                    </div>
                </article>

                <article>
                    <header className='text-center text-3xl'>Your Commission</header>
                </article>
            </main>                
        </>
    )
}

export default Dashboard