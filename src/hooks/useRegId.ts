import {useLocation} from "react-router";

export const useRegId = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    console.log(query.get('q'));
    return query.get('q') ?? '';
}