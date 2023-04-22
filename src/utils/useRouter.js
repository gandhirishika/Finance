import { useMemo } from "react";
import {
  useParams,
//   useLocation,
  useNavigate,
//   useMatch,
} from "react-router-dom";
import queryString from "query-string";
function MyComponent() {
  const router = useRouter();
 
  return <button onClick={(e) => router.push("/about")}>About</button>;
}
// Hook
export function useRouter() {
  const params = useParams();
//   const location = useLocation();
  const navigate = useNavigate();
//   const match = useMatch();
 
  return useMemo(() => {
    return {  
      push: navigate.push,
      replace: navigate.replace,
    //   pathname: location.pathname,
     
      query: {
        // ...queryString.parse(location.search), 
        ...params,
      },
    
    //   match,
    //   location,
      navigate,
    };
  }, [params,
    //  match, 
    // location,
     navigate]);
}