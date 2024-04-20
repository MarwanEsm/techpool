import { useEffect } from 'react';
import { useRouter } from 'next/router';


const DefaultRoute = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/home")
  }, [router]);

};

export default DefaultRoute;
