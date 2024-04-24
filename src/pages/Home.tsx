import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar } from '@ionic/react';

const Project: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil Saya</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonAvatar>
              <img alt="begoyang" src="https://images-ext-1.discordapp.net/external/uBSVWj5HDijc8dHd8m1M-s8WhPTGra_1YyLEZrViHGU/%3Fsize%3D64/https/cdn.discordapp.com/emojis/693718279306477609.gif?width=80&height=80" />
            </IonAvatar>
            <IonCardTitle>Dennise Arjun F.</IonCardTitle>
            <IonCardSubtitle>begoyang</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Project;