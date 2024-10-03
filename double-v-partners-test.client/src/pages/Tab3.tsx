import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter} from '@ionic/react';
import './Tab3.css';
import React, {useState} from "react";
import {Product} from "../models/product.ts";
import ProductComponent from "../components/ProductComponent.tsx";
import {FavoriteContext} from "../App.tsx";

const Tab3: React.FC = () => {
    const [products, setProducts] = useState<Product[]>();
    const clickFavorite = (product: Product) => {
        deleteFavorite(product.id)
    };
    useIonViewWillEnter(() => {
        getProducts();
    }, []);
    const loading = <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a
        href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
    </p>

    const productsTemplate = products === undefined ? loading :
        <IonList>
            {products.map(product =>

                <ProductComponent key={product.id} id={product.id} title={product.title} price={product.price}
                                  description={product.description} images={product.images}
                                  creationAt={product.creationAt} updatedAt={product.updatedAt}
                                  category={product.category} favorite={product.favorite}></ProductComponent>
            )}

        </IonList>;
    return (
        <FavoriteContext.Provider value={clickFavorite}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Favorites</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    {productsTemplate}
                </IonContent>
            </IonPage>
        </FavoriteContext.Provider>

    );

    async function getProducts() {
        const response = await fetch('getlistfavoriteproducts');
        const data = await response.json();
        setProducts(data);
    }

    async function deleteFavorite(productId: string) {
        await fetch(`/deletefavoriteproduct/${productId}`, {method: 'DELETE'});
        getProducts();
    }
};

export default Tab3;
