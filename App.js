//Explicar Estrutura de um arquivo react (Componente) - ok
//Criar uma Tarefa - ok
//Explicar state - ok
//Componentizar a Tarefa - ok
//Explicar props  - ok
//Explicar o useEffect (Alimentar Dinamicamente as tarefas) - ok
//https://jsonplaceholder.typicode.com/todos' (Tarefas Fakes) - ok 


import React from 'react';
import {Text, View} from 'react-native';

import Login from './pages/Login/index'
import PerfilAluno from './pages/PerfilAluno/index'
import MeuPerfil from './pages/MeuPerfil/index'
import EditarPerfil from './pages/EditarPerfil/index'
import DetalheDisciplina from './pages/DetalheDisciplina/index'

export default function App() {

  return (
      //<Login/>
      //<PerfilAluno/>
      //<MeuPerfil/>
      //<EditarPerfil/>
      <DetalheDisciplina/>
      );
}

