import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Url } from '../constants';
import BalanceSheetService from '../services/BalanceSheetService';
import LoanDecisionService from '../services/LoanDecisionService';
import IBalanceSheetData from '../types/BalanceSheet';


const ReviewPage: React.FC = () => {
    const { state } = useLocation();
    const [load, setLoad] = useState("load");
    const navigate = useNavigate();
    const [balanceSheet, setBalanceSheet] = useState<Array<IBalanceSheetData>>([]);

    useEffect(() => {
        retrieveBalanceSheet();
    }, [load]);

    const retrieveBalanceSheet = () => {
        BalanceSheetService.getBalanceByBusinessByProvider(state.business, state.provider)
            .then((response: any) => {
                setBalanceSheet(response.data.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    const applyLoan = () => {

        navigate(Url.LOAN_RESULT, { state });
    };

    return (
        <div className="flex flex-col items-center">
            <div className='pt-16'>
                <h3 className="text-4xl font-bold text-purple-600">Review Balance Sheet</h3>
            </div>
            <div className="p-8 inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-min divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Year
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Month
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Profit Status
                                </th>
                                <th
                                    scope="col"
                                    className="px-2 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Asset Value
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {balanceSheet.map(sheet =>
                                <tr>
                                    <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {sheet.year}
                                    </td>
                                    <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {sheet.month}
                                    </td>
                                    <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {sheet.profitOrLoss}
                                    </td>
                                    <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {sheet.assetsValue}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button
                        onClick={applyLoan}
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Apply for Loan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;