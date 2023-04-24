import React from 'react';
import mock from '../../mocks/cesta';
import Cesta from './components/Cesta'

const CestaProdutos = () => {
  return <Cesta {...mock} />;
};

export default CestaProdutos;
