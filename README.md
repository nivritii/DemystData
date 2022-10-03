# DemystData

## To start Bank Loan App cluster

`docker-compose up`

This will spin up the different applications within the project.

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

### bla-api
bla-api is the backend of the application which uses Typescript + Node JS. 

### provider-xero

### provider-myob

### decision-engine

### Application Flow
- On load of homepage (http:localhost:45000/bla), Restful API calls will be initiated by frontend to backend to retrieve details of, 
  1. Businesses - By making restful API to backend endpoint: `http://localhost:6060/businesses`
  2. Application software providers - By making restful API to backend endpoint: `http://localhost:6060/providers`
  
- User can select buisness and provider from the dropdown list populated in homeoage and provide loan amount to verify if that business is eligible for loan.

- On form submit, backend call is made to retrieve monthwise profit data of the buisness with the selected provider.
  e.g: `http://localhost:6060/balance?provider=MYOB&business=business_2` - Provider and Business will be sent as query param to backend

- 
 
