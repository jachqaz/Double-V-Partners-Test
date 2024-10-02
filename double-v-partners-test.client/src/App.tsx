import {useEffect, useState} from 'react';
import './App.css';
import '@ionic/react/css/core.css';
import {IonApp, IonCard, IonCardContent, IonContent, IonText, setupIonicReact} from '@ionic/react';
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
import {Forecast} from "../domain/forecast.ts";
import {Category} from "../domain/category.ts";

setupIonicReact();


function App() {
    const [categories, setCategories] = useState<Category[]>();
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        getCategories();
        populateWeatherData();
    }, []);

    const loading = <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a
        href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
    </p>

    const categoriesTemplate = categories === undefined ? loading :
        <IonCard>
            <IonCardContent>
                {categories.map(category =>
                    <>
                        <IonText>{category.id}</IonText>
                        <IonText>{category.name}</IonText>
                        <IonText>{category.image}</IonText>
                        <IonText>{category.creationAt}</IonText>
                        <IonText>{category.updatedAt}</IonText>
                    </>
                )}
            </IonCardContent>
        </IonCard>;

    const contents = forecasts === undefined ? loading :
        <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
            </thead>
            <tbody>
            {forecasts.map(forecast =>
                <tr key={forecast.date}>
                    <td>{forecast.date}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            )}
            </tbody>
        </table>;

    return (
        <IonApp>
            <IonContent fullscreen>
                <div>
                    <h1 id="tableLabel">Weather forecast</h1>
                    <p>This component demonstrates fetching data from the server.</p>
                    {contents}
                    {categoriesTemplate}
                </div>
            </IonContent>
        </IonApp>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }

    async function getCategories() {
        const response = await fetch('getlistcategories');
        const data = await response.json();
        setCategories(data);
    }
}

export default App;