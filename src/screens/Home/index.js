import React from 'react';
import Topo from '../../components/Topo/Topo';
import Produtores from './components/Produtores';

export default function Home() {
  return <Produtores topo={Topo} />;
}
