import React, { Suspense } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { auth } from "../../firebase/firebase";
import Login from './../../pages/Login/index';
import Spinner from '../Spinner';
import Header from '../Header';

const ProtectedRoute = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Header />
      {user ? <Suspense fallback={<Spinner />}><Outlet /></Suspense> : <Login />}
    </>
  )
}

export default ProtectedRoute