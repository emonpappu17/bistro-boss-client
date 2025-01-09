import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div >
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            items.map(item =>
                                <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;




// import FoodCard from "../../../components/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Import required modules
// import { Pagination } from "swiper/modules";

// const OrderTab = ({ items }) => {
//     const itemsPerPage = 6; // Adjust this based on how many items you want per page/slide
//     const paginatedItems = chunkArray(items, itemsPerPage);

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return `<span class="${className}">${index + 1}</span>`;
//         },
//     };

//     return (
//         <div>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 {paginatedItems.map((pageItems, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
//                             {pageItems.map((item) => (
//                                 <FoodCard key={item._id} item={item} />
//                             ))}
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

// // Utility Function
// const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//         result.push(array.slice(i, i + size));
//     }
//     return result;
// };
