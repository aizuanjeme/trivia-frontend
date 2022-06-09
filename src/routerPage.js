import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingpage/landingpage'
import CreateQuestion from './pages/questions/create'

export default function RouterPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/createquestion" element={<CreateQuestion />} />
                <Route path="/" element={<LandingPage />} />
                {/* <Route exact path="/createquestion" component={Create} /> */}
                {/* <Route path="/login" exact component={Login} /> */}
            </Routes>
        </BrowserRouter>
    )
}
