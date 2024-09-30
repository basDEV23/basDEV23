// src/components/Header.js
import React, { useState } from 'react';
import { IconButton, Dialog, DialogType, DialogFooter, PrimaryButton } from '@fluentui/react';
import './Header.css';

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <header className="header">
      <img src="/logo.png" alt="VisitBDO Logo" className="logo" />
      <IconButton iconProps={{ iconName: 'Help' }} onClick={openDialog} className="iconButton" />
      
      <Dialog
        hidden={!isDialogOpen}
        onDismiss={closeDialog}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: 'Anwendungshilfe',
          subText: 'Diese Anwendung dient zur Verwaltung des Check-ins und Check-outs von Besuchern.',
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={closeDialog} text="Schließen" />
        </DialogFooter>
      </Dialog>
    </header>
  );
};

export default Header;
