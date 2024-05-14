import React from 'react'
import DashboardPage from '../pages/dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Index