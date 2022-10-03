import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './route';
import { env } from '../env';
import { Spin } from '../style';

export const Router = () => {

    const renderFallback = () => {
        if (routes.some(({ path }) => window.location.pathname === `${env.server}${path}`)) {
            return <Spin/>
        }
    };

    return (
        <BrowserRouter basename={env.server.path}>
            <Suspense fallback={renderFallback()}>
                <Routes>
                    {routes.map(({ path, children }, i) => (
                        <Route key={i} path={path} element={children} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};