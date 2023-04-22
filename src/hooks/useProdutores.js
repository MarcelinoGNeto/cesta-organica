import {useState, useEffect} from 'react';

import {carregaProdutores} from '../services/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState(''); //inicia a variavel de string com valor vazio
  const [lista, setlista] = useState([]); //array vazio

  useEffect(() => {
    const retorno = carregaProdutores(); //armazena serviço em uma variavel
    setTitulo(retorno.titulo); //usa o metodo/funcao setTitulo para retornar dado da variavel
    setlista(retorno.lista);
  }, []);

  return [titulo, lista];
}
