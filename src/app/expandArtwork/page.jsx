import Navbar from "../../components/Navbar";
import Artwork from "../../components/Artwork"
import Commission from "../../components/Commission"
import ExpandedPicture from "../../components/ExpandedPicture";
import Tag from "../../components/Tag";
import CommentContainer from "../../components/CommentContainer";

const ExpandCommission = () => {
    return(
        <>
         <Navbar />
         <main className="my-6">
            <article>
                <div id="expand" className="flex items-stretch mx-15 ">
                    <div className="self-start grow">
                        <div className='flex mb-3' id='user'>
                            <div className='size-9 bg-black mr-2 rounded-full' id='pfp'></div>
                            <a className='font-medium' id='username'>Username</a>
                        </div>
                        <ExpandedPicture />
                        <div className="flex mt-2">
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
                        
                    </div>
                    
                    <div className="flex flex-row flex-wrap self-start ml-12 mt-2 max-w-full w-full">
                        <header className="text-2xl">
                            Description
                        </header>

                        <section className="text-xs mt-2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                        </section>

                        <section className="mt-2">
                            <header className="flex my-3">
                                <svg className='size-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM3 17V3h18v17.077L17.923 17z"/></svg>
                                <h2>Komentar (3)</h2>
                            </header>
                            
                            <div>
                                <CommentContainer />
                                <CommentContainer />
                            </div>
                        </section>
                    </div>
                </div>
            </article>
            
            <article>
                <div className="border h-0 opacity-25 my-8"></div>

                <header className="text-center text-3xl mt-16">
                    <h1>Explore for More</h1>
                </header>
                
                {/* items itu template manual bukan dari tailwindnya, khusus buat kotak-kotak commission atau artwork */}
                <section className="items my-10">
                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                </section>
            </article>
         </main>
        </>
    )
}

export default ExpandCommission