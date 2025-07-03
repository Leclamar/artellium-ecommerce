import OrderContainer from "../../components/OrderContainer";
import Navbar from "../../components/Navbar"
import Commission from "../../components/Commission"

const Orders = () => {
    return(
        <>
            <Navbar />
            <main>
                <article className="text-center mt-8 mb-25">
                    <header className="text-2xl mb-8">My Orders</header>

                    <div className="grid gap-6">
                        <OrderContainer />
                        <OrderContainer />
                        <OrderContainer />
                        <OrderContainer />
                    </div>
                </article>
                
                <article className="text-center">
                    <div className="border h-0 w-full my-10 opacity-20"></div>

                    <header className="text-5xl my-10">
                        Explore
                    </header>

                    <section className="items">
                        <Commission />
                        <Commission />
                        <Commission />
                        <Commission />
                        <Commission />
                        <Commission />
                        <Commission />
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

export default Orders