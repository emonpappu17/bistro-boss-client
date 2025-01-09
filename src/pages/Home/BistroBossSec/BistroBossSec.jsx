import chefService from '../../../assets/home/chef-service.jpg'
const BistroBossSec = () => {
    return (
        <div>
            {/* <img src={chefService} alt="" /> */}
            <div
                style={{ backgroundImage: `url('${chefService}')` }}
                className='bg-cover bg-center md:py-[120px] py-[50px] md:px-[110px] px-[40px]'>
                <div
                    className='md:py-[100px] py-[20px] md:px-[150px] px-[50px] border bg-white text-center'>
                    <h1 className='text-4xl text-[#151515] mb-3 uppercase'>Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBossSec;