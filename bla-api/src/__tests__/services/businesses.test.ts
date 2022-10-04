import BusinessesService from '../../services/businesses';
import axios from 'axios';

jest.mock('axios')

test('Should get all businesses', async () => {

    const businesses = await BusinessesService.getBusinesses();
    expect(businesses.length).toBe(3)
    expect(businesses[0].id).toBe(1)
    expect(businesses[0].name).toBe('business_1')
    expect(businesses[0].year).toBe(2020)
})