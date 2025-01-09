import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        // enabled: user,
        queryFn: async () => {
            console.log('asking or checking is admin', user, !loading);
            if (user) {
                const res = await axiosSecure.get(`/user/admin/${user?.email}`);
                console.log(res.data)
                return res.data?.admin ?? null;
            }
            return null;
            // const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            // console.log(res.data)
            // return res.data?.admin;
        },
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;


// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user, loading } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         enabled: !loading,
//         queryFn: async () => {
//             console.log('asking or checking is admin', user);

//             if (user) {
//                 try {
//                     const res = await axiosSecure.get(`/user/admin/${user?.email}`);
//                     console.log(res.data);
//                     return res.data?.admin ?? null; // Ensure a value is always returned
//                 } catch (error) {
//                     console.error('Error fetching admin status:', error);
//                     return null; // Return null in case of an error
//                 }
//             }
//             return null; // Return null if user is not defined
//         }
//     });
//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;
