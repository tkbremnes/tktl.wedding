import React from "react";

import Page from "../Page";

import "./styles.css";

function PageOvernatting() {
    return (
        <Page>
            <h1>Overnatting</h1>

            <p>Vi har tatt kontakt med Quality Hotel Klubben i Tønsberg og laget en avtale med dem. De har reservert rom til våre gjester, som kan bestilles innen <strong>24. januar 2018</strong>.</p>

            <section className="Collected">
                <p>Prisen på disse rommene er:</p>
                <p>Dobbeltrom: 1095,- inkl. frokost</p>
                <p>Enkeltrom: 895,- inkl. frokost</p>
            </section>

            <p>Hvis dere ønsker å benytte dere av tilbudet, så oppgi denne referansekoden når dere tar kontakt med Hotel Klubben: <strong>1112r079559/60/61/62</strong></p>

            <p>Hvis dere ønsker å bo et annet sted, er dette selvfølgelig opp til dere!</p>

            <p>For å benytte dere av tilbudet må dere ta kontakt med de per telefon eller epost.</p>

            <section className="Collected">
                <p>Telefon: <a href="tel:+47 33 35 97 00">+47 33 35 97 00</a></p>
                <p>E-post: <a href="mailto:q.klubben@choice.no">q.klubben@choice.no</a></p>
            </section>

            <p>For mer informasjon <a href="https://www.nordicchoicehotels.no/hotell/norge/tonsberg/quality-hotel-klubben/">se nettsiden deres.</a></p>
        </Page>
    )
}

export default PageOvernatting;
