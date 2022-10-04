import AccountingProvidersService from '../../services/accountingProviders';
import axios from 'axios';

jest.mock('axios')

test('Should get all providers', async () => {
  const providers = await AccountingProvidersService.getProviders()
  expect(providers.length).toBe(2)
  expect(providers[0].id).toBe(1)
  expect(providers[0].name).toBe('Xero')
})