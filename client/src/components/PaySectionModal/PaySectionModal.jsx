import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const PaySectionModal = ({ data, isOpen, setOpenModal }) => {
  const idParam = window.localStorage.getItem('idParam');

  const [formValues, setFormValues] = useState({
    name: '',
    cpf: '',
    address: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    cpf: '',
    address: '',
    paymentMethod: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = '*Campo Obrigatório não preenchido*';
    if (!formValues.cpf.trim()) newErrors.cpf = '*Campo Obrigatório não preenchido*';
    if (!formValues.address.trim()) newErrors.address = '*Campo Obrigatório não preenchido*';
    if (!formValues.paymentMethod.trim()) newErrors.paymentMethod = '*Campo Obrigatório não preenchido*';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      const whatsappMessage = `https://wa.me/5583981577251?text=Olá,%20gostaria%20de%20finalizar%20a%20compra%20com%20os%20seguintes%20dados:%0A%0ANome:%20${encodeURIComponent(
        formValues.name
      )}%0ACPF:%20${encodeURIComponent(
        formValues.cpf
      )}%0AEndereço:%20${encodeURIComponent(
        formValues.address
      )}%0AForma%20de%20Pagamento:%20${encodeURIComponent(formValues.paymentMethod)}`;

      window.location.href = whatsappMessage;
    }
  };

  return (
    <div className='modal'>
      <div className='all-content'>
        <div className='title'>
          <div className='right-side__title'>
            <Link to={`/productSelected/${idParam}`}>
              <span onClick={setOpenModal}>X</span>
            </Link>
          </div>
          <h1>Finalizar Compra:</h1>
        </div>
        <div className='forms'>
          <form onSubmit={handleSubmit}>
            <label className='payCart-label'>Digite seu nome:</label>
            <input
              type='text'
              placeholder='Nome completo'
              name='name'
              value={formValues.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className='Ps error-text'>{errors.name}</p>}

            <label className='payCart-label'>Digite seu CPF:</label>
            <input
              type='text'
              placeholder='000.000.000-00'
              name='cpf'
              value={formValues.cpf}
              onChange={handleInputChange}
            />
            {errors.cpf && <p className='Ps error-text'>{errors.cpf}</p>}

            <label className='payCart-label'>Endereço:</label>
            <input
              type='text'
              placeholder='Rua dos bobos, número 0'
              name='address'
              value={formValues.address}
              onChange={handleInputChange}
            />
            {errors.address && <p className='Ps error-text'>{errors.address}</p>}

            <label className='payCart-label'>Forma de Pagamento:</label>
            <input
              type='text'
              placeholder='Dinheiro/Cartão'
              name='paymentMethod'
              value={formValues.paymentMethod}
              onChange={handleInputChange}
            />
            {errors.paymentMethod && <p className='Ps error-text'>{errors.paymentMethod}</p>}

            <button type='submit'>Confirmar Pedido</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaySectionModal;
