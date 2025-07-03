import Navbar from "../../components/Navbar";
import Artwork from "../../components/Artwork"
import Commission from "../../components/Commission"
import ExpandedPicture from "../../components/ExpandedPicture";
import Tag from "../../components/Tag";

const ExpandCommission = () => {
    return(
        <>
         <Navbar />
         <main className="my-6">
            <article>
                <div id="expand" className="flex items-stretch mx-15 ">
                    <div className="self-start grow">
                        <ExpandedPicture />
                    </div>
                    
                    <div className="flex flex-row flex-wrap self-start ml-12 mt-2 max-w-full w-full">
                        <section className="h-full">
                            <header className="flex justify-between w-full h-max mb-4">
                                <div className='flex' id='user'>
                                    <div className='size-9 bg-black mr-2 rounded-full' id='pfp'></div>
                                    <a className='font-medium' id='username'>Username</a>
                                </div>
                                <div>
                                    <button className="btn-mid-blue py-2 px-4 text-xs font-light">More About This Artist</button>
                                </div>
                            </header>

                            <div>
                                <header>
                                    <h1 className="text-2xl font-bold my-4">Description</h1>
                                </header>

                                <div className="flex" id="tags">
                                    <div className="mr-2">
                                        <Tag />
                                    </div>
                                    <div className="mr-2">
                                        <Tag />
                                    </div>
                                    <div className="mr-2">
                                        <Tag />
                                    </div>
                                </div>

                                <div className="btn-light-blue my-4 text-center max-w-max text-sm"><span>3</span> Slots Available</div>

                                <section>
                                    <header className="text-lg">
                                        <h3>Additional Information</h3>
                                    </header>
                                    <div className="flex text-sm font-light min-h-30 content-start">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                                    </div>
                                </section>
                            </div>
                        </section>

                        <div className="w-full my-6">
                            <button className=" flex border max-w-max py-2.5 px-28 place-self-center-safe rounded-md text-sm" id="commission-btn">
                                <div className='size-7 bg-black mr-2 rounded-full' id='pfp'></div>
                                <div>Beli Komisi <span>Ella</span></div>
                            </button>
                        </div>
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
                    <Commission />
                    <Commission />
                    <Commission />
                    <Commission />
                    <Commission />
                    <Commission />
                    <Commission />
                    <Commission />
                </section>
            </article>
         </main>
        </>
    )
}

export default ExpandCommission