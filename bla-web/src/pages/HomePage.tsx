import React, { useEffect, useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import BalanceSheetService from '../services/BalanceSheetService';
import BusinessService from '../services/BusinessService';
import ProviderService from '../services/ProviderService';
import IBusinessData from '../types/Business';
import IProviderData from '../types/Provider';
import { useNavigate } from "react-router-dom";
import { Url } from '../constants';

type FormValues = {
    business: string;
    provider: string;
    loanAmount: string;
};

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & { options: IBusinessData[] | IProviderData[] };

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.provider ? values : {},
        errors: !values.provider
            ? {
                business: {
                    type: 'required',
                    message: 'This is required.',
                },
                provider: {
                    type: 'required',
                    message: 'This is required.',
                },
                loanAmount: {
                    type: 'required',
                    message: 'This is required.',
                }
            }
            : {},
    };
};

const HomePage: React.FC = () => {
    const [businesses, setBusinesses] = useState<Array<IBusinessData>>([]);
    const [providers, setProviders] = useState<Array<IProviderData>>([]);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const navigate = useNavigate();

    useEffect(() => {
        retrieveBusinesses();
        retrieveProviders();
    }, []);

    const retrieveBusinesses = () => {
        BusinessService.getAll()
            .then((response: any) => {
                setBusinesses(response.data.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const retrieveProviders = () => {
        ProviderService.getAll()
            .then((response: any) => {
                setProviders(response.data.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const onSubmit = handleSubmit((data) => {
        navigate(Url.REVIEW, { state: data });
    });

    const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
        ({ options, ...props }, ref) => (
            <select ref={ref} {...props}>
                {options.map(({ name }) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
        )
    );

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 md:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-purple-600">Business Details</h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md md:max-w-md md:rounded-lg">
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-row items-start">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 pt-6">
                                Business:
                            </label>
                            <div className='px-12 py-4'>
                                <Select
                                    {...register("business")}
                                    options={businesses}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-start">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 pt-6">
                                Provider:
                            </label>
                            <div className='px-14 py-4'>
                                <Select
                                    {...register("provider")}
                                    options={providers}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-start">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 pt-6">
                                Loan Amount:
                            </label>
                            <div className='px-6 py-4'>
                                <input {...register("loanAmount")} placeholder="12345" />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;