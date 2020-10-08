import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to the Piggy Bank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome to the Piggy Bank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonGrid>
          <IonRow>
            <IonCol size-md="6">
                <IonCard>
                  <IonCardContent>
                    <IonItem>
                      <IonLabel position="floating"> Sign up </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating"> Log in </IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;