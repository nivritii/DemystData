import React, { Children, lazy } from 'react';
import { Url } from '../constants';

interface RouteProps {
    path: string;
    children: JSX.Element;
}

const HomePage = lazy(() => import('../pages/HomePage'));
const ReviewPage = lazy(() => import('../pages/ReviewPage'));
const LoanResultPage = lazy(() => import('../pages/LoanResultPage'));

export const routes: RouteProps[] = [
    {
        path: Url.HOME,
        children: <HomePage />
    },
    {
        path: Url.REVIEW,
        children: <ReviewPage />
    },
    {
        path: Url.LOAN_RESULT,
        children: <LoanResultPage />
    }
];