import http from "../http-common";
import ILoanDecisionReq from "../types/LoanDecisionReq";

const getLoanDecision = (data: ILoanDecisionReq) => {
  return http.get(`/loanDecision?business=${data.business}&provider=${data.provider}&loanAmount=${data.loanAmount}`);
};

const LoanDecisionService = {
  getLoanDecision
};


export default LoanDecisionService;