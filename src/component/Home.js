import { Link } from "react-router-dom";
function Home(){
        return(
            <section id="home" className="pt-36">
                <div className="container">
                    <div className="flex flext-wrap">
                        <div className="w-full self-center px-4">
                            <h1 className="font-semibold text-emerald-500 text-4xl mb-5">Puskemas Guntur</h1>
                            <h2 className="font-medium text-slate-500 text-lg mb-10 leading-relaxed lg:text-2xl">Melayani dengan Hati untuk Bangsa yang Sehat</h2>
                            <Link to={`/add`} className="text-base font-semibold text-white bg-[#469536] py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80
                            transition duration-300 ease-in-out">Registrasi Pasien</Link>
                        </div>
                        <div className="w-full self-end px-4">
                            <div className="relative mt-10 lg:mt-9 lg:right-0">
                                <div className="wrapper">
                                    <div className="slides">
                                        <span id="slide-1"></span>
                                        <span id="slide-2"></span>
                                        <span id="slide-3"></span>
                                        <span id="slide-4"></span>
                                        <div className="image">
                                            <img src="image/gambar1.jpg" alt="gambar1"/>
                                            <img src="image/gambar2.jpg" alt="gambar2"/>
                                            <img src="image/gambar3.jpg" alt="gambar3"/>
                                            <img src="image/gambar4.jpg" alt="gambar4"/>
                                        </div>
                                    </div>
                                {/* Navigasi */}
                                <div className="navigasi">
                                    <a href="#slide-1">1</a>
                                    <a href="#slide-2">2</a>
                                    <a href="#slide-3">3</a>
                                    <a href="#slide-4">4</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );    
}
export default Home