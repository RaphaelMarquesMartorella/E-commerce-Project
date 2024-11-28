import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import StoreHeader from '../../components/StoreHeader/StoreHeader';
import StoreSection from '../../components/StoreSection/StoreSection';
import Footer from '../../components/Footer/Footer';

const ProductSelected = ({ data }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [facility, setFacility] = useState([]);

  const findSelectedProduct = useCallback(() => {
    console.log('Finding selected product with ID:', productId);
    const product = data.find((product) => product._id === productId);
    if (product) {
      console.log('Selected product found:', product);
      setSelectedProduct(product);
    } else {
      console.warn('No product found with the given ID:', productId);
    }
  }, [data, productId]);

  const fetchFacilityData = useCallback(async () => {
    if (!productId) {
      console.warn('Product ID is not defined. Skipping API call.');
      return;
    }

    try {
      console.log('Fetching product data from API for ID:', productId);
      const response = await axios.get(`http://localhost:3001/api/v1/products/${productId}`);
      console.log('API Response:', response.data);

      if (response.data) {
        console.log('Facility data received:', response.data);
        setFacility(response.data);
      } else {
        console.error('No product data returned from API response.');
      }
    } catch (error) {
      console.error('Error fetching product data from API:', error);
    }
  }, [productId]);

  useEffect(() => {
    findSelectedProduct();
  }, [findSelectedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      fetchFacilityData();
    }
  }, [selectedProduct, fetchFacilityData]);

  if (!selectedProduct) {
    console.log('Waiting for selected product...');
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StoreHeader data={data} />
      <div className="products">
        {facility._id ? (
            <StoreSection facility={facility} />
        ) : (
          <p>No facility data available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductSelected;
