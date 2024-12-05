import Frame from '../../assets/Frame 5.png'
import Frames from '../../assets/Frame (1).png'

const Header = () => {
    return (
        <header className='w-7xl  p-6 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Ripa Recipe Calories</h1>
                <div className='flex justify-between  items-center gap-40 '>
                    <div className='flex items-center gap-12   '>
                        <h1>Home</h1>
                        <h1>Recipes</h1>
                        <h1>About</h1>
                        <h1>Search</h1>

                    </div>
                    <div className='flex  items-center gap-4'>
                        <div className='flex items-center w-64 p-6 h-12 rounded-full bg-[#d6d6d8]'>
                            <img src={Frames} alt="" />
                            <h3><button>Search</button></h3>
                        </div>
                        <img src={Frame} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;