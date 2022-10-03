import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoanDecisionService from '../services/LoanDecisionService';
import ILoanDecisionResp from '../types/LoanDecisionResp';

const LoanResultPage: React.FC = () => {
    const { state } = useLocation();
    const [load, setLoad] = useState("load");
    const [loanResult, setLoanResult] = useState<ILoanDecisionResp>();

    useEffect(() => {
        retrieveBusinessDetails();
    }, [load]);


    const retrieveBusinessDetails = () => {
        LoanDecisionService.getLoanDecision({ business: state.business, provider: state.provider, loanAmount: state.loanAmount })
            .then((response: any) => {
                setLoanResult(response.data.data);
                console.log(response.data.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 md:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-purple-600">Loan Result</h3>
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
                                        Approval Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Approved Percentage (%)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {loanResult?.approved ? ("True") : ("False")}
                                    </td>
                                    <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {loanResult?.approvalRate}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanResultPage;