import axios from 'axios';

// import { useAuth } from './useAuth';
import { useAccessToken } from './useAccessToken';
import { useState } from 'react';

const useGetParts = () => {
  const { accessToken } = useAccessToken();
  const products = [];

  const fetchParts = async (partNumber, limit = 20) => {
    console.log(partNumber, limit);
    const distributorsRequestConfig = [
      {
        url: import.meta.env.VITE_DIGIKEY_SEARCH_URL,
        method: 'post',
        data: {
          Keywords: partNumber,
          Limit: limit,
          offset: 0,
          FilterOptionsRequest: {
            //Specify any filters you want to  apply
          },
          SortOptions: {
            Field: 'None',
            SortOrder: 'Ascending',
          },
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-DIGIKEY-Client-Id': import.meta.env.VITE_DIGIKEY_PROD_CLIENT_ID,
          'X-DIGIKEY-Locale-Site': 'IN',
          'X-DIGIKEY-Locale-Currency': 'INR',
          'Content-Type': 'application/json',
        },
      },
      {
        url: import.meta.env.VITE_MOUSER_SEARCH_URL,
        method: 'post',
        data: {
          SearchByKeywordRequest: {
            keyword: partNumber,
            records: limit,
            startingRecord: 0,
            searchOptions: 'string',
            searchWithYourSignUpLanguage: 'string',
          },
        },
        params: {
          apiKey: import.meta.env.VITE_MOUSER_SEARCH_API_KEY,
        },
      },
    ];

    try {
      for (let i = 0; i < distributorsRequestConfig.length; i++) {
        const response = await axios.request(distributorsRequestConfig[i]);
        products.push({
          parts: formatResponse(response.data),
        });
      }

      return products;
    } catch (error) {
      console.log('ERROR: While Fetching Parts', error);
      console.error(error);
    }
  };
  return { fetchParts };
};

export { useGetParts };

const formatResponse = (data) => {
  return data?.Products
    ? [...data.Products, { distributor: import.meta.env.VITE_DIGIKEY }]
    : data?.SearchResults?.Parts
    ? [
        ...data.SearchResults.Parts,
        { distributor: import.meta.env.VITE_MOUSER },
      ]
    : null;
};
