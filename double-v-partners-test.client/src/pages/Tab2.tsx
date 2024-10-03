import {
    IonContent,
    IonHeader,
    IonLabel,
    IonList,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import './Tab2.css';
import React, {useState} from "react";
import {Product} from "../models/product.ts";
import ProductComponent from "../components/ProductComponent.tsx";
import {FavoriteContext} from '../App.tsx';
import {OrderEnum} from "../models/orderEnum.ts";

let valueSegment = OrderEnum.default;
const Tab2: React.FC = () => {

    const [products, setProducts] = useState<Product[]>();

    const clickFavorite = (product: Product) => {
        product.favorite ? deleteFavorite(product.id) : createFavorite(product);
    };
    useIonViewWillEnter(() => {
        getProducts();
    }, []);
    const loading = <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a
        href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
    </p>

    const productsTemplate = products === undefined ? loading :
        <IonList>
            {products.map(product => <ProductComponent key={product.id} id={product.id} title={product.title}
                                                       price={product.price}
                                                       description={product.description} images={product.images}
                                                       creationAt={product.creationAt} updatedAt={product.updatedAt}
                                                       category={product.category}
                                                       favorite={product.favorite}></ProductComponent>
            )}

        </IonList>;
    return (
        <FavoriteContext.Provider value={clickFavorite}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Products</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonSegment value={valueSegment}>
                        <IonSegmentButton value={OrderEnum.default} onClick={() => getProducts()}>
                            <IonLabel>Default</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value={OrderEnum.name} onClick={() => getProducts(OrderEnum.name)}>
                            <IonLabel>Name</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value={OrderEnum.dateCreation}
                                          onClick={() => getProducts(OrderEnum.dateCreation)}>
                            <IonLabel>Date Creation</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value={OrderEnum.price} onClick={() => getProducts(OrderEnum.price)}>
                            <IonLabel>Price</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                    {productsTemplate}
                </IonContent>
            </IonPage>
        </FavoriteContext.Provider>

    );

    async function getProducts(orderEnum?: OrderEnum) {
        const response = await fetch('getlistproducts');
        const data = await response.json();
        switch (orderEnum) {
            case OrderEnum.name:
                valueSegment = OrderEnum.name;
                data.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
                break;
            case OrderEnum.dateCreation:
                valueSegment = OrderEnum.dateCreation;
                data.sort((a, b) => {
                    const fechaA = new Date(a.dateCreation);
                    const fechaB = new Date(b.dateCreation);
                    return fechaA.getTime() - fechaB.getTime();
                });
                break;
            case OrderEnum.price:
                valueSegment = OrderEnum.price;
                data.sort((a, b) => a.price - b.price);
                break;
            default:
                valueSegment = OrderEnum.default;
                break;
        }
        setProducts(data);
    }

    async function createFavorite(product: Product) {
        await fetch('/postfavoriteproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        });
        getProducts();
    }

    async function deleteFavorite(productId: string) {
        await fetch(`/deletefavoriteproduct/${productId}`, {method: 'DELETE'});
        getProducts();
    }
};

export default Tab2;
