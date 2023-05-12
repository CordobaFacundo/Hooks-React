
import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { HomePage, LoginPage, AboutPage, ErrorPage, Navbar } from './index'
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <h1>MainApp</h1>
                <Navbar />
                <hr />

                <Routes>
                    <Route path='/' element={ <HomePage />} />
                    <Route path='login' element={ <LoginPage /> }/>
                    <Route path='about' element={ <AboutPage /> }/>
                    <Route path='pageNotFound' element={ <ErrorPage />}/>
                    <Route path='/*' element={ <Navigate to="/pageNotFound"/> }/>
                </Routes>
            </UserProvider>
        </>
    )
}
