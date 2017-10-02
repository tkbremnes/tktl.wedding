import React from "react";

import Page from "../Page";

import "./styles.css";

function PageWishlist() {
    return (
        <Page>
            <h1>Ønskeliste</h1>
            <p>
                Mest av alt så ønsker vi at dere vil dele denne dagen med oss, og mange kommer langveisfra, det i seg selv er gave nok.
            </p>

            <p>
                Men hvis noen ønsker å gi, så vil vi sette stor pris på bidrag til vår bryllupsreise. Eventuelle pengegaver kan settes inn på konto <strong>1208.11.35205</strong> eller gis i kontanter.
            </p>

            <section className="WishList-digital">
                <h2>Digitale ønskelister</h2>
                <p>Vi har også laget oss digitale ønskelister. Disse finner du her:</p>

                <ul>
                    <li><a href="https://www.minegavelister.no/243529?authkey=f97c0c51-49ed-4e11-a465-cd1b01d1bbc1">Mine Gavelister</a></li>
                    <li><a href="https://www.kitchn.no/bryllup/vis-liste/?WishListId=87346">Kitchn</a></li>
                </ul>
            </section>
        </Page>
    )
}

export default PageWishlist;
