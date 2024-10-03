import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab3.css';
import React, {useEffect, useState} from "react";
import {Product} from "../models/product.ts";
import ProductComponent from "../components/ProductComponent.tsx";

const Tab3: React.FC = () => {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        getProducts();
    }, []);
    const loading = <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a
        href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
    </p>

    const categoriesTemplate = products === undefined ? loading :
        <IonList>
            {products.map(product =>
                <ProductComponent id={product.id} title={product.title} price={product.price}
                                  description={product.description} images={product.images}
                                  creationAt={product.creationAt} updatedAt={product.updatedAt}
                                  category={product.category} favorite={product.favorite}></ProductComponent>
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

    async function getProducts() {
        const response = await fetch('getlistfavoriteproducts');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
};

export default Tab3;
