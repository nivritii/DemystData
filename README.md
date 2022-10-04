# DemystData

## To start Bank Loan App cluster

1. In root folder run `docker-compose up` in terminal 
2. Load app from browser `localhost:45000/bla`

## Bank Loan App
Dockerized app consisting of,
- bla-web (frontend)
- bla-api (backend)
- provider-xero (application-software-1)
- provider-myob (application-software-2)
- decision-engine

### bla-web
bla-web is the frontend of the application which uses Typescript + React JS. Used tailwind as app's CSS.
Project is structured to group each components functionality.

Fronend running on port 45000

#### Application Flow
1. Load `localhost:45000/bla`:
  Homepage loaded. Restful API calls will be initiated to backend to retrieve details of, 
  - Businesses - By making restful API to backend endpoint: `GET /businesses`
  - Loan providers - By making restful API to backend endpoint: `GET /providers`
  
  User can select business and provider from the dropdown list populated in homepage and provide loan amount and click on submit.

2. On form submit, app loads balance sheet in `localhost:45000/bla/review`
  Backend call to retrieve monthly profit data of the business with the selected provider.
  e.g: `GET /balance?provider=MYOB&business=business_2` - Provider and business sent as query param

3. On click of submit loan application, app loads in `localhost:45000/bla/loanResult`
  Backend call to retrieve approval status
  e.g: `GET loanDecision?business=business_1&provider=MYOB&loanAmount=1400` - Provider, business and loan amount as query param

### bla-api
bla-api is the backend of the application which uses Typescript + Express JS. Backend interacts with other apps using RESTFul apis.
Project is structured in `routes-controllers-services-model`

Backend running on port 6060

Repository is mocked as model db

RESTful API endpoints in backend:
1. **Business**
  - `GET /businesses` - returns all business

2. **Providers**
  - `GET /providers` - returns all loan providers

3. **BalanceSheets**
  - `GET /balance?provider={provider}&business={business}` - Provider and business as query params. Api call returns the balance sheet of the business with respect to the loan provider

4. **LoanDecision**
  - `GET /loanDecision?business={business}&provider={provider}&loanAmount={loanAmount}` - Provider, business and loan amount query params. preAssessment percent and approval status
### provider-xero
provider-xero app represents loan provider's backend. It is built using json-server to provide balance sheets for the different businesses.

### provider-myob
provider-myob app represents loan provider's backend. It is built using json-server to provide balance sheets for the different businesses.

### decision-engine
provider-xero app represents decision engine backend. API request from backend with loan pre-assessment field and business details are posted to the system and system returns the approval status.

## Testing
- Unit tests for bl-api are added for controllers and services layer with 100% coverage.

## Dockerization of application
Below services have been dockerized:
- bla-web
- bla-api
- provider-xero
- provider-MYOB
- decision-engine

`docker-compose up` from the root folder will spin up the different applications within the project.
 
