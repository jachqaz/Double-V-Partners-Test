import './App.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Ionic */
import '@ionic/react/css/core.css';
import {IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact} from '@ionic/react';
// @ts-ignore
import {Redirect, Route} from 'react-router-dom';
import {IonReactRouter} from '@ionic/react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {createContext} from "react";

setupIonicReact();
export const FavoriteContext = createContext("FavoriteContext");

function App() {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/tab1">
                            <Tab1/>
                        </Route>
                        <Route exact path="/tab2">
                            <Tab2/>
                        </Route>
                        <Route path="/tab3">
                            <Tab3/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/tab1"/>
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="tab1" href="/tab1">
                            <IonLabel>Categories</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab2" href="/tab2">
                            <IonLabel>Products</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/tab3">
                            <IonLabel>Favorites</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;