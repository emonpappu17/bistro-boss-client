import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {

        if (user && user.email) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //Refetch cart to update the cart items counts
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card bg-base-100  shadow-xl">
            <img
                src={image}
                alt="Shoes"
            />
            <p className="absolute right-0 bg-slate-900 mr-4 mt-4 px-4  text-white">${price}</p>
            <div className="card-body items-center text-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="py-5 px-7 hover:border-none rounded-[8px] border-b-2 border-[#BB8506] uppercase text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;