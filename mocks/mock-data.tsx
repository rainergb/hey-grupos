import { Group, Message } from '../types';

export const GROUPS: Group[] = [
  {
    id: '1',
    name: 'React-native',
    description: 'Fala lucas tudo show por aqui',
  },
  {
    id: '2',
    name: 'javascript',
    description: 'Seu grupo foi criado',
  },
  {
    id: '3',
    name: 'php',
    description: 'Como consigo conectar com mysql',
  },
];

export const MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Grupo react-native criado. Bem vindo(a)!',
    user: 'system',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    text: 'Um chat para criar um networking com a galera RN que está buscando aprender RN',
    user: 'admin',
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    text: 'Sejam todos bem vindos 😊',
    user: 'admin',
    timestamp: new Date().toISOString(),
  },
  {
    id: '4',
    text: 'Opa matheus tudo certo?',
    user: 'Lucas',
    timestamp: new Date().toISOString(),
  },
  {
    id: '5',
    text: 'Fala lucas tudo certo e por aí?',
    user: 'admin',
    timestamp: new Date().toISOString(),
  },
  {
    id: '6',
    text: 'Fala galera, novo aqui no grupo, tamo junto!',
    user: 'José Silva',
    timestamp: new Date().toISOString(),
  },
];