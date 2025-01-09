// import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommendation = () => {
    return (
        <div className="px-4 md:px-0">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100  shadow-xl">
                    <figure className="">
                        <img
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Haddock</h2>
                        <p>Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.</p>
                        <div className="card-actions">
                            <button className="py-5 px-7 hover:border-none rounded-[8px] border-b-2 border-[#BB8506] uppercase text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="">
                        <img
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Escalope de Veau</h2>
                        <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        <div className="card-actions">
                            <button className="py-5 px-7 hover:border-none rounded-[8px] border-b-2 border-[#BB8506] uppercase text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="">
                        <img
                            src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="py-5 px-7 hover:border-none rounded-[8px] border-b-2 border-[#BB8506] uppercase text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
                        </div>
                    </div>
                </div>
                {/* <FoodCard></FoodCard> */}
            </div>
        </div> 
    );
};

export default Recommendation;