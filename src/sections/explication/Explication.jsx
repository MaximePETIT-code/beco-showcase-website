import React from "react";
import "./Explication.css";
import Img from "./2.jpg";
import Eclair from "./Eclair.png";
import Bluetooth from "./Bluetooth.png";
import phone from "./phone.png";


export default function Explication() {
    return (
     
            < div className="grid__explain" >
                <div className="flex__col">
                    <h2>Suivez votre santé depuis chez vous</h2>
                    <p>Grâce à Beco, suivre votre santé n'a jamais été aussi facile et accessible.</p>
                    <p className="mb-20">  Grâce à notre technologie de pointe, vous pouvez suivre vos données de santé en temps réel et avoir accès à des conseils de santé personnalisés.</p>
                    <div className="explain__container">
                        <div className="explain">
                            <img src={Eclair} alt="Icone eclair" className="icon-eclair"/>
                            <h3>Batterie ultra performant</h3>
                            <p>Nos batteries assurent une utilisation continue et fiable</p>
                        </div>
                        <div className="explain">
                            <img src={Bluetooth} alt="icone bluetooth" className="icon-bluetooth"/>
                            <h3>Connexion Bluetooth 5.0</h3>
                            <p>Connexion à nos appareils en quelques secondes seulement</p>

                        </div>
                    </div>
                </div>
                <div className="col2">
                    <img src={phone} alt="" className="phone" />
                    <img src={Img} alt="" className="Image" />
                </div>


            </div >
         
    );
}
