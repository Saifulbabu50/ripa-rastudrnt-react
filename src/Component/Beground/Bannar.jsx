import Rectangle from '../../assets/Rectangle 1 (2).png'

const Bannar = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={Rectangle}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-28  text-center ">
                            <h1 className='text-6xl text-white font-bold pb-8'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                            <h3 className='text-white pb-8 '>Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
                                Database and solve 500+ coding <br /> problems to become an exceptionally
                                well world-class Programmer.
                            </h3>
                            <div className=' gap-8 flex items-center justify-center pt-8'>
                                <button className='bg-[#0BE58A] h-16 w-52 rounded-full 
                            font-semibold text-xl'>Explore Now</button>
                                <button className='text-white h-16 w-52 border-2 border-white rounded-full
                            font-semibold text-xl gap-7'>Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center items-center gap-28 pt-28'>
                    <h3 className='text-4xl font-semibold pb-6'>Our Recipes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>
            </div>
        </div>
    );
};

export default Bannar;