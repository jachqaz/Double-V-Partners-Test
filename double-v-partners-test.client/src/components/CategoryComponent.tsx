import {IonCard, IonCardContent, IonCol, IonImg, IonItem, IonRow, IonText} from '@ionic/react';
import './CategoryComponent.css';
import {Category} from "../models/category.ts";

function CategoryComponent(category: Category) {
    return (
        <IonItem key={category.id}>
            <IonCard>
                <IonCardContent>
                    <IonRow>
                        <IonCol size="2">
                            <IonImg alt="Silhouette of mountains" src={category.image}/>
                        </IonCol>
                        <IonCol size="10">
                            <IonRow style={{fontWeight: 'bold'}}>
                                <IonText>{category.id}. </IonText>
                                <IonText>{category.name}</IonText>
                            </IonRow>
                            <IonRow>
                                <IonText><label
                                    style={{fontWeight: 'bold'}}>CreationAt: </label>{category.creationAt},</IonText>
                            </IonRow>
                            <IonRow>
                                <IonText><label style={{fontWeight: 'bold'}}>UpdatedAt: </label>{category.updatedAt}
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCardContent>
            </IonCard>
        </IonItem>
    );
}

export default CategoryComponent;
