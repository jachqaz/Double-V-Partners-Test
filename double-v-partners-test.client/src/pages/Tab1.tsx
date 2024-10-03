import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import {useEffect, useState} from "react";
import {Category} from "../models/category.ts";
import CategoryComponent from '../components/CategoryComponent.tsx';

const Tab1: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {
        getCategories();
    }, []);
    const loading = <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a
        href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
    </p>

    const categoriesTemplate = categories === undefined ? loading :
        <IonList>
            {categories.map(category =>
                <CategoryComponent key={category.id} id={category.id} name={category.name} image={category.image}
                                   creationAt={category.creationAt}
                                   updatedAt={category.updatedAt}></CategoryComponent>
            )}

        </IonList>;
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Categories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {categoriesTemplate}
            </IonContent>
        </IonPage>
    );

    async function getCategories() {
        const response = await fetch('getlistcategories');
        const data = await response.json();
        setCategories(data);
    }
};

export default Tab1;
