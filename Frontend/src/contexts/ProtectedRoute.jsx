import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { getUser } from '@/services/auth';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      getUser()
        .then(userData => {
          if (!userData) {
            toast.info('Please log in to access the admin page !');
            setRedirectPath('/login');
          } else if (requiredRole && userData.role.name !== requiredRole) {
            toast.info('You do not have the required permissions to access this page !');
            setRedirectPath('/notfound');
          }
        })
        .catch(err => {
          console.log(err);
          toast.error('An error occurred. Please try again later.');
          setRedirectPath('/login');
        });
    } else {
      toast.info('Please log in to access the admin page !');
      setRedirectPath('/login');
    }
  }, [requiredRole]);

  if (redirectPath) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProtectedRoute;
