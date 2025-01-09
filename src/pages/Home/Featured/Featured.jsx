import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-cover bg-center text-white  my-20">
            <div className="hero-overlay bg-opacity-70 bg-black h-full pt-8">
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}>
                </SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36 px-7 ">
                    <div className="mb-4">
                        <img src={featuredImg} />
                    </div>
                    <div className="md:ml-10">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;