import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBossSec from "../BistroBossSec/BistroBossSec";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommendation from "../Recommendation/Recommendation";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBossSec></BistroBossSec>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommendation></Recommendation>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;