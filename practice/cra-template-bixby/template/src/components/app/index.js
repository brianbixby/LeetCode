import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('../navbar'));
const LandingContainer = lazy(() => import('../landing-container'));
const ProfileContainer = lazy(() => import('../profile-container'));
const NotFound = lazy(() => import('../notFound'));

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingContainer />} />
          <Route path="/user/:profileID" element={<ProfileContainer />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
