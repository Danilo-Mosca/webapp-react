import style from "../style/Contacts.module.css";

export default function Contacts() {
    return (
        <section className="container text-center">
            <div className={`my-3 ${style.category}`}>
                <h1>Contattaci su questi canali</h1>
            </div>
            <div className="d-flex justify-content-between">
                <div className="row">
                    <div className="my-5 col-12 col-md-6 col-lg-4">
                        <div className={`my-3 ${style.category}`}>
                            <h2>Via Enzo ed Elvira Sellerio 50, 90141 Palermo - Italia</h2>
                            <p>Tel. (+39) 091.625.4194</p>
                            <p>Fax. (+39) 091.625.5737</p>
                            <p>info@sellerio.it</p>
                        </div>
                        <div className={`my-3 ${style.category}`}>
                            <h4>Ufficio Commerciale</h4>
                            <p>commerciale@sellerio.it</p>
                        </div>
                        <div className={`my-3 ${style.category}`}>
                            <h4>Ufficio diritti</h4>
                            <p>rights@sellerio.it</p>
                        </div>
                        <div className={`my-3 ${style.category}`}>
                            <h4>Ufficio stampa</h4>
                            <p>ufficiostampa@sellerio.it</p>
                        </div>
                    </div>
                    <div className="my-5 col-12 col-md-6 col-lg-4">
                        <div className={`my-3 ${style.category}`}>
                            <h2>Distribuzione</h2>
                            <p>Messaggerie Libri S.p.A.</p>
                            <p>Via Verdi, 8</p>
                            <p>20090 - Assago (MI) - Italia</p>
                            <p>Tel. (+39) 02.457.741</p>
                            <p>Fax. (+39) 02.457.010.32</p>
                            <p>www.messaggerielibri.it</p>
                        </div>
                    </div>
                    <div className="my-5 col-12 col-md-6 col-lg-4">
                        <div className={`my-3 ${style.category}`}>
                            <h2>Propaganda</h2>
                            <p>Promedi S.r.l.</p>
                            <p>Piazza Malpighi, 6</p>
                            <p>40123 Bologna (BO) - Italia</p>
                            <p>Tel. (+39) 051.275.7311</p>
                            <p>Fax. (+39) 051.344.496</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}