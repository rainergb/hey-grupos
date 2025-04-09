import React, { useState } from 'react';
import { 
  View, 
  FlatList, 
  SafeAreaView, 
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import Header from '../../../components/ui/header';
import GroupItem from '../../../components/ui/group-item';
import FloatingButton from '../../../components/ui/floating-button';
import ConfirmDialog from '../../../components/ui/confirm-dialog';
import { GROUPS } from '../../../mocks/mock-data';
import { useThemeColor } from '../../../hooks/useThemeColor';
import { Group } from '../../../types';

export default function GroupList() {
  const [groups, setGroups] = useState<Group[]>(GROUPS);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  
  const backgroundColor = useThemeColor({}, 'background');

  const handleGroupPress = (group: Group) => {
    router.push({
      pathname: '/(stacks)/(tabs)/chat-room',
      params: { groupId: group.id, groupName: group.name }
    });
  };

  const handleGroupLongPress = (group: Group) => {
    setSelectedGroup(group);
    setConfirmDialogVisible(true);
  };

  const handleDeleteGroup = () => {
    if (selectedGroup) {
      setGroups(groups.filter(group => group.id !== selectedGroup.id));
    }
    setConfirmDialogVisible(false);
    setSelectedGroup(null);
  };

  const handleAddGroup = () => {
    // Em uma aplicação real, isso navegaria para uma tela de criar grupo
    // Por simplicidade, vamos adicionar um grupo fictício
    const newGroup: Group = {
      id: String(Date.now()),
      name: `Novo Grupo ${groups.length + 1}`,
      description: 'Grupo criado recentemente',
    };
    
    setGroups([...groups, newGroup]);
  };

  const handleSearch = () => {
    router.push('/(stacks)/(tabs)/search-groups');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <StatusBar />
      <Header 
        title="Grupos" 
        showSearch 
        onSearchPress={handleSearch}
      />
      
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupItem
            group={item}
            onPress={() => handleGroupPress(item)}
            onLongPress={() => handleGroupLongPress(item)}
          />
        )}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      
      <FloatingButton onPress={handleAddGroup} />
      
      <ConfirmDialog
        visible={confirmDialogVisible}
        message="Você tem certeza que deseja deletar essa sala?"
        onCancel={() => setConfirmDialogVisible(false)}
        onConfirm={handleDeleteGroup}
      />
    </SafeAreaView>
  );
}