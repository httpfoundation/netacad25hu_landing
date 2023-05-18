import {useLocation} from "react-router";

export const useRegId = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    return query.get('q') ?? '';
}