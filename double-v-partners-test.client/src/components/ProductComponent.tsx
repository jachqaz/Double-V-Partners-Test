import {IonCard, IonCardContent, IonImg, IonItem, IonRow, IonText} from '@ionic/react';
import './CategoryComponent.css';
import {Product} from "../models/product.ts";
import CategoryComponent from "./CategoryComponent.tsx";
import {CiBookmark} from "react-icons/ci";
import {FaBookmark} from "react-icons/fa";
import {useContext} from 'react';
import {FavoriteContext} from "../App.tsx";

function ProductComponent(product: Product) {
    const clickFavorite = useContext(FavoriteContext);
    return (
        <IonItem>
            <IonCard>
                <IonImg alt="Silhouette of mountains" src={product.images[0]}/>
                <IonCardContent>
                    <IonRow>
                        <div onClick={() => clickFavorite(product)}>
                            {product.favorite ? <FaBookmark size={40}/> : <CiBookmark size={40}/>}
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonText style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center'}}>
                            {product.id}. {product.title} <label style={{color: 'red'}}>${product.price}</label>
                        </IonText>
                    </IonRow>
                    <IonRow>
                        <IonText style={{textAlign: 'center'}}>
                            {product.description}
                        </IonText>
                    </IonRow>
                    <CategoryComponent id={product.category.id} name={product.category.name}
                                       image={product.category.image} creationAt={product.category.creationAt}
                                       updatedAt={product.category.updatedAt}></CategoryComponent>
                    <IonRow>
                        <IonText><label style={{fontWeight: 'bold'}}>CreationAt: </label>{product.category.creationAt},</IonText>
                    </IonRow>
                    <IonRow>
                        <IonText><label style={{fontWeight: 'bold'}}>UpdatedAt: </label>{product.category.updatedAt}
                        </IonText>
                    </IonRow>
                </IonCardContent>
            </IonCard>
        </IonItem>
    );
}

export default ProductComponent;
