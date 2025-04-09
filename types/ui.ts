export interface Message {
    id: string;
    text: string;
    user: string; // Username ou 'system'
    userId?: string;
    timestamp: string;
    groupId?: string;
  }