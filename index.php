<!DOCTYPE html>
<html lang="fr">
<?php 
    session_start();
    $mailMessage = ["Mail bien envoyé","Un problème est survenu avec l'envoi du mail, veuillez réessayer plus tard"];
    $message = "";
    $messageClass = "";

    if(isset($_GET["m"]))
        if(isset($mailMessage[$_GET["m"]]))
        {
            $message =  $mailMessage[$_GET["m"]];
            $messageClass = "popupMail";
        }
    if(isset($_SESSION["timer"]))
        $timer = $_SESSION["timer"];
    else
        $timer = "";

    echo("<input type='hidden' id='timerSession' data-value='".$timer."' />");
    
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Thomas Roess, Développeur Web, HTML, CSS, JS, PHP, Symfony 5">
    <link rel="icon" type="image/png" href="assets/img/Favicon-Thomas.png" />
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="lib/swiper-bundle.min.css"/>
    <title>Portfolio Thomas Roess</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SCML6EWJHB"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SCML6EWJHB');
    </script>
</head>
<body>
    <div id="mainWraper">
        <div id="blackscreen">
            <div id="intro">
                <h1 >Bienvenue Chez Thomas Roess</h1>
                <p id="start">Click anywhere to continue</p>
            </div>
        </div>
        <header>
            <div class="<?= $messageClass ?>">
                <p><?= $message ?></p>
            </div>
            <img id="logo" src="assets/img/Logo-Thomas-black.png" alt="Logo Thomas Roess Boite noir avec Nom ecrit en blanc style console windows">
            <div>
                <h2 id="titre"></h2>
                <span id="undescore">&#95;</span>
                <div id="slideList" class="swiper-pagination"></div>
                <div id="slideListM" class="swiper-paginationM"></div>
            </div>
        </header>
        <div id ="swiper" class="swiper">
            <div class="swiper-wrapper">
                <section class="swiper-slide">
                    <div id="article1" >
                        <div class="pc50"> <!-- Half screen separation-->
                            <div>
                                <img src="assets/img/Thomas_roess-cropped.webp" alt="Photo du propriétaire du portfolio" class="border">
                            </div>
                        </div>
                        <div class="pc50">
                            <div class="dialog__content"> <!-- Dialog box, video game style-->
                                <p>Thomas</p>
                                <p class="dialog0"></p>
                                <p class="dialog1"></p>
                            </div>
                            <div class="dialog__content">
                                <p>Thomas</p>
                                <p class="dialog2"></p>
                                <p class="dialog3"></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article2">
                        <div class="pc50">
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><span>2011<span class="square"></span><!-- Little square that help me cheat with the borders-->
                                        </span></td>
                                        <td><div class="line"></div></td>
                                        <td><span class="square2"></span><span>1ère Année de Cycle d'ingénieur - Epsi Arras</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>2019<span class="square"></span></span></td>
                                        <td><div class="line"></div></td>
                                        <td><span class="square2"></span><span>Création du site <a href="https://www.osteopathe-begaud.fr" target="blank_">www.osteopathe-begaud.fr</a></span></td>
                                    </tr>
                                    <tr>
                                        <td><span>2020<span class="square"></span></span></td>
                                        <td><div class="line"></div></td>
                                        <td><span class="square2"></span><span>Diplôme de Développeur Web/Web Mobile</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>2020<span class="square"></span></span></td>
                                        <td><div class="line"></div></td>
                                        <td><span class="square2"></span><span>Application Symfony 5 OsteoClic</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>2021<span class="square"></span></span></td>
                                        <td><div class="line"></div></td>
                                        <td><span class="square2"></span><span>Formation de Développeur Fullstack CDA</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="pc50">
                            <div id="outerBorder"> <!-- Border aniamtion-->
                                <div id="border1" class="borderR"></div> <!-- Spinning rectangles-->
                                <div id="border2" class="borderR"></div>
                                <div id="border3" class="borderR"></div>
                                <div class="border">
                                    <div>
                                        <p>HTML5 - CSS3 - UIKIT</p>
                                        <p>Sémantique - SEO</p>
                                    </div>
                                    <div>
                                        <p>php - mysql - js es6</p>
                                        <p>Tests Unitaires - PHP/JS OO</p>
                                    </div>
                                    <div>
                                        <p>wordpress - symfony 5</p>
                                        <p>Prestashop - Doctrine</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article3">
                        <div class="pc50">
                            <div id="i1" > <!-- Images list-->
                                <img src="assets/img/site-mockup-triple.webp" alt="Mockup du site Osteopathe begaud dans 3 formats différents, mobile, tablette, etlaptop">
                            </div>
                            <div id="i2">
                                <img src="assets/img/appli-mockup2.webp" alt="Mockup de l'application Osteoclic sous format laptop">
                            </div>
                        </div>
                        <div class="pc50">
                            <div id="console">
                                <div class="console-top">
                                    <img src="assets/img/cmd.JPG" alt="logo de la console windows"> Thomas Roess © <span><p>1</p>/<p>2</p></span></div>
                                <div id="p1"> <!-- Project list-->
                                    <h2>Site vitrine de l'osteopathe Annabel Begaud</h2>
                                        <p>
                                            Mon 1er site, fait sans CMS pour pouvoir prendre de bonnes habitudes et respecter la sémantique. Il est en constante évolution 
                                            pour répondre aux demandes de ma cliente.
                                        </p>
                                </div>
                                <div id="p2" >
                                    <h2>OsteoClic</h2>
                                    <p>
                                        OsteoClic est une application faite pour une Ostéopathe pour gérer sa patientèle et ses consultations selon le cabinet. 
                                        Elle a été développé sous Symfony 5 dont une grosse partie dynamique en JS.
                                    </p>
                                </div>
                                <object type="image/svg+xml" data="assets/img/mouse-scroll-up-down.svg"></object>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article4" >
                        <a href="https://github.com/Kikuichimonji" target="blank_"><img src="assets/img/github.webp" alt="logo GitHub"></a>
                        <a href="https://www.linkedin.com/in/thomas-roess/" target="blank_"><img src="assets/img/linkedin.webp" alt="logo Linkdin"></a>
                        <div>
                            <p>N'hesitez pas à me contacter pour plus d'informations</p>
                            <form method="post" action="mail.php" id="contact"  onsubmit="return submitForm(this)">
                                <div id="formContainer">
                                    <div>
                                        <label class="textDown" for="prenom">Votre prenom <span>*</span></label>
                                        <input type="text" name="prenom" id="prenom"  required/>
                                    </div>
                                    <div>
                                        <label class="textDown" for="nom">Votre nom <span>*</span></label>
                                        <input type="text" name="nom" id="nom"  required/>
                                    </div>
                                </div>
                                <div>
                                    <label class="textDown" for="mail">Votre mail <span>*</span></label>
                                    <input type="email" name="mail" id="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  size="30" required/>
                                </div>
                                <div>
                                    <label class="textDown" for="texte">Votre message <span>*</span></label>
                                    <textarea name="texte" id="texte" rows="5" cols="33" required></textarea>  
                                </div> 
                                <button type="submit" form="contact" value="Submit" id="buttonForm">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div id ="swiperM" class="swiperM">
            <div class="swiper-wrapper">
                <section class="swiper-slide">
                    <div id="article1M" >
                        <div class="pc50"> <!-- Half screen separation-->
                            <div>
                                <img src="assets/img/Thomas-roess-Mobile-flip.jpg" alt="Photo du propriétaire du portfolio" class="border">
                            </div>
                        </div>
                        <div class="pc50">
                            <div class="dialog__contentM"> <!-- Dialog box, video game style-->
                                <p>Thomas</p>
                                <p class="dialog0"></p>
                                <p class="dialog1"></p>
                            </div>
                            <div class="dialog__contentM">
                                <p>Thomas</p>
                                <p class="dialog2"></p>
                                <p class="dialog3"></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article2M">
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td><span>2011<span class="square"></span><!-- Little square that help me cheat with the borders-->
                                    </span></td>
                                    <td><div class="line"></div></td>
                                    <td><span class="square2"></span><span>1ère Année de Cycle d'ingénieur - Epsi Arras</span></td>
                                </tr>
                                <tr>
                                    <td><span>2019<span class="square"></span></span></td>
                                    <td><div class="line"></div></td>
                                    <td><span class="square2"></span><span>Création du site <a href="https://www.osteopathe-begaud.fr" target="blank_">www.osteopathe-begaud.fr</a></span></td>
                                </tr>
                                <tr>
                                    <td><span>2020<span class="square"></span></span></td>
                                    <td><div class="line"></div></td>
                                    <td><span class="square2"></span><span>Diplôme de Développeur Web/Web Mobile</span></td>
                                </tr>
                                <tr>
                                    <td><span>2020<span class="square"></span></span></td>
                                    <td><div class="line"></div></td>
                                    <td><span class="square2"></span><span>Application Symfony 5 OsteoClic</span></td>
                                </tr>
                                <tr>
                                    <td><span>2021<span class="square"></span></span></td>
                                    <td><div class="line"></div></td>
                                    <td><span class="square2"></span><span>Formation de Développeur Fullstack CDA</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="article2HalfMWraper" class="swiper-slide">
                    <div id="article2HalfM">
                        <div id="outerBorderM"> <!-- Border aniamtion-->
                            <div id="border1M" class="borderR"></div> <!-- Spinning rectangles-->
                            <div id="border2M" class="borderR"></div>
                            <div id="border3M" class="borderR"></div>
                            <div class="border">
                                <div>
                                    <p>HTML5 - CSS3 - UIKIT</p>
                                    <p>Sémantique - SEO</p>
                                </div>
                                <div>
                                    <p>php - mysql - js es6</p>
                                    <p>Tests Unitaires - PHP/JS OO</p>
                                </div>
                                <div>
                                    <p>wordpress - symfony 5</p>
                                    <p>Prestashop - Doctrine</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article3M">
                        <div class="pc50">
                            <div id="i1M" > <!-- Images list-->
                                <img src="assets/img/site-mockup-triple.webp" alt="Mockup du site Osteopathe begaud dans 3 formats différents, mobile, tablette, etlaptop">
                            </div>
                            <div id="i2M">
                                <img src="assets/img/appli-mockup2.webp" alt="Mockup de l'application Osteoclic sous format laptop">
                            </div>
                        </div>
                        <div class="pc50">
                            <div id="consoleM">
                                <div class="console-top">
                                    <img src="assets/img/cmd.JPG" alt="Logo de la console windows"> Thomas Roess © <span><p>1</p>/<p>2</p></span></div>
                                <div id="p1M"> <!-- Project list-->
                                    <h2>Site vitrine de l'osteopathe Annabel Begaud</h2>
                                        <p>
                                            Mon 1er site, fait sans CMS pour pouvoir prendre de bonnes habitudes et respecter la sémantique. Il est en constante évolution 
                                            pour répondre aux demandes de ma cliente.
                                        </p>
                                </div>
                                <div id="p2M" >
                                    <h2>OsteoClic</h2>
                                    <p>
                                        OsteoClic est une application faite pour une Ostéopathe pour gérer sa patientèle et ses consultations selon le cabinet. 
                                        Elle a été développé sous Symfony 5 dont une grosse partie dynamique en JS.
                                    </p>
                                </div>
                                <object type="image/svg+xml" data="assets/img/mouse-scroll-down-up.svg"></object>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="swiper-slide">
                    <div id="article4M" >
                        <a href="https://github.com/Kikuichimonji" target="blank_"><img src="assets/img/github.webp" alt="logo GitHub"></a>
                        <a href="https://www.linkedin.com/in/thomas-roess/" target="blank_"><img src="assets/img/linkedin.webp" alt="logo Linkdin"></a>
                        <div class="formDiv">
                            <p>N'hesitez pas à me contacter pour plus d'informations</p>
                            <form method="post" action="mail.php" id="contact"  onsubmit="return submitForm(this)">
                                <div id="formContainerM">
                                    <div>
                                        <label class="textDown" for="prenom">Prenom <span>*</span></label>
                                        <input type="text" name="prenom" id="prenomM"  required/>
                                    </div>
                                    <div>
                                        <label class="textDown" for="nom">Nom <span>*</span></label>
                                        <input type="text" name="nom" id="nomM"  required/>
                                    </div>
                                </div>
                                <div>
                                    <label class="textDown" for="mail">Mail <span>*</span></label>
                                    <input type="email" name="mail" id="mailM" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  size="30" required/>
                                </div>
                                <div>
                                    <label class="textDown" for="texte">Message <span>*</span></label>
                                    <textarea name="texte" id="texteM" rows="5" cols="33" required></textarea>  
                                </div> 
                                <button type="submit" form="contact" value="Submit" id="buttonFormM">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <footer>
            <p>Politique de confidentialité</p>
            <p>Copyright 2021 Thomas Roess</p>
            <p>Mentions Légales</p>
        </footer>
        <div id="cookie">
            <span>Cookies?</span>
            <span>X</span>
            <div>
                <p>Decline All</p>
                <p>Accept All</p>
                <p>Manage Settings</p>
            </div>
        </div>
        <div class="modalBox" id="mConfid">
            <div class="modal">
                <div class="modalHeader"> Politique de Confidentialité</div>
                <div class="modalBody">
                    <p>Le site web thomas-roess.fr est détenu par Thomas Roess, qui est un contrôleur de données de vos données personnelles.</p>

                    <p>Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par thomas-roess.fr, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le site web de thomas-roess.fr.</p>

                    <p>Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.</p>

                    <p>Les informations personnelles que nous collectons :</p>
                    <p>Lorsque vous visitez le thomas-roess.fr, nous recueillons certaines informations que vous rentreriez dans le formulaire (le nom, le prénom, l'adresse mail).</p>

                    <p>Pourquoi traitons-nous vos données ?</p>
                    <p>Aucune données du formulaire n'est sauvergardées, ces données de contacts ne seront utilisées uniquement qu'en cas de réponse</p>

                    <p>Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d'informations, par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez des détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du site web. Par exemple vous ne pourrez pas nous contacter directement à partir du site web. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via <span class="bold">admin@thomas-roess.fr</span>.</p>

                    <p>Vos droits :</p>
                    <p>Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :</p>
                    <ul>
                        <li>Le droit d'être informé.</li>
                        <li>Le droit d'accès.</li>
                        <li>Le droit de rectification.</li>
                        <li>Le droit à l'effacement.</li>
                        <li>Le droit de restreindre le traitement.</li>
                        <li>Le droit à la portabilité des données.</li>
                        <li>Le droit d'opposition.</li>
                        <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
                    </ul>
                    <p>Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.</p>
                    
                    <p>Liens vers d'autres sites web :</p>
                    <p>Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site web et à lire les déclarations de confidentialité de chaque site web susceptible de collecter des informations personnelles.</p>

                    <p>Sécurité de l'information :</p>
                    <p>Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.</p>

                    <p>Divulgation légale :</p>
                    <p>Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l'exige ou l'autorise, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.</p>

                    <p>Informations de contact :</p>
                    <p>Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à <span class="bold">admin@thomas-roess.fr</span>.</p>
                </div>
            </div>
        </div>
        <div class="modalBox" id="mLegal">
            <div class="modal">
                <div class="modalHeader"> Mentions Légales</div>
                <div class="modalBody">
                    <h2>Définitions</h2>
                    <p><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.<br>
                    <b>Prestations et Services :</b> <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> met à disposition des Clients :</p>
                    <p><b>Contenu :</b> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>
                    <p><b>Informations clients :</b> Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>
                    <p><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnommé.</p>
                    <p><b>Informations personnelles :</b> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                    <p>Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                    <h2>1. Présentation du site internet.</h2>
                    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                    </p><p><strong>Propriétaire</strong> :   Thomas Roess   – 12 rue du rebberg 68140 Gunsbach<br>
                    <strong>Responsable publication</strong> : Thomas Roess – admin@thomas-roess.fr<br>
                    Le responsable publication est une personne physique ou une personne morale.<br>
                    <strong>Webmaster</strong> : Thomas Roess – admin@thomas-roess.fr<br>
                    <strong>Hébergeur</strong> : o2switch – 222 Bd Gustave Flaubert, 63000 Clermont-Ferrand<br>
                    </p>

                    <h2>2. Conditions générales d’utilisation du site et des services proposés.</h2>
                    <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. 
                    Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
                    <p>L’utilisation du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> sont donc invités à les consulter de manière régulière.</p>
                    <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
                    Le site web <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est mis à jour régulièrement par <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

                    <h2>3. Description des services fournis.</h2>
                    <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> s’efforce de fournir sur le site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

                    <p>Toutes les informations indiquées sur le site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

                    <h2>4. Limitations contractuelles sur les données techniques.</h2>

                    <p>Le site utilise la technologie JavaScript.

                    Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
                    Le site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                    <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>

                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>

                    <h2>5. Propriété intellectuelle et contrefaçons.</h2>

                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>.</p>

                    <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

                    <h2>6. Limitations de responsabilité.</h2>

                    <p>Thomas Roess agit en tant qu’éditeur du site. <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>  est responsable de la qualité et de la véracité du Contenu qu’il publie. </p>

                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>.
                    Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>

                    <h2>7. Gestion des données personnelles.</h2>

                    <p>Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). </p>

                    <h3>7.1 Responsables de la collecte des données personnelles</h3>

                    <p>Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Thomas Roess. <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>est représenté par /, son représentant légal</p>

                    <p>En tant que responsable du traitement des données qu’il collecte, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.
                    Chaque fois que <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> traite des Données Personnelles, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> les traite.</p>
                    
                    <h3>7.2 Finalité des données collectées</h3>
                    
                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est susceptible de traiter tout ou partie des données : </p>
                    <ul>
                        <li>Nom, prénom, adresse mail : Utilisation unique pour une réponse à un message envoyé à l'auteur de ce site. Aucune base de données n'est en place</li>
                    </ul>
                    <p><a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité pour vous répondre.</p>
                    
                    <h3>7.3 Droit d’accès, de rectification et d’opposition</h3>
                    
                    <p>
                    Conformément à la réglementation européenne en vigueur, les Utilisateurs de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> disposent des droits suivants : </p>
                    <ul>

                    <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite </li>
                    
                    <li>droit de retirer à tout moment un consentement (article 13-2c RGPD) </li>
                    
                    <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD) </li>
                    
                    <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) </li>
                    
                    <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) </li>
                    
                    <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné</li>
                    </ul>

                    <p>Dès que <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>
                    
                    <p>Si l’Utilisateur souhaite savoir comment <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> par écrit à l’adresse suivante : </p>
                    
                    Thomas Roess – DPO, Thomas Roess <br>
                    12 rue du rebberg 68140 Gunsbach.
                    
                    <p>Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport). </p>

                    <p>
                    Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>
                    
                    <h3>7.4 Non-communication des données personnelles</h3>

                    <p>
                    <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                    <p>
                    <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ne collecte aucune « données sensibles ».</p>

                    <p>
                    Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
                    <p>
                    Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> sont principalement les agents de notre service client.</p>
                    
                    <div ng-bind-html="rgpdHTML"><h3>7.5 Types de données collectées</h3><p>Concernant les utilisateurs d’un Site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, nous collectons les données suivantes qui sont indispensables au fonctionnement du service&nbsp;, et qui seront conservées pendant une période maximale de 12 mois mois après la fin de la relation contractuelle:<br>nom, prénom, adresse mail</p></div>


                    <h2>8. Notification d’incident</h2>
                    <p>
                    Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. 
                    Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
                    <p>
                    Aucune information personnelle de l'utilisateur du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>.</p>

                    <h3>Sécurité</h3>

                    <p>
                    Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe. </p>
                    
                    <p>
                    Lors du traitement des Données Personnelles, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>
                    
                    <h2>9. Liens hypertextes « cookies » et balises (“tags”) internet</h2>
                    <p>
                    Le site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>. Cependant, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
                    Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.
                    <p></p>

                    <h3>9.1. « COOKIES »</h3>
                    <p>
                    Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</p>
                    <p>
                    <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</p>
                    <p>
                    Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
                    <p>
                    Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
                    <p>
                    Le cas échéant, <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
                    <p>
                    À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</p>
                    <p>
                    Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
                    <p>
                    Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> dépose ce type de cookies.</p>
                    
                    <h3>Article 9.2. BALISES (“TAGS”) INTERNET</h3>
                    

                    <p>

                    <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.</p>
                    
                    <p>
                    Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci. 
                    </p>
                    <p>
                    Cette technologie permet à <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur. </p>
                    <p>
                    Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a>, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</p>
                    <p>
                    </p><h2>10. Droit applicable et attribution de juridiction.</h2>  
                    <p>
                    Tout litige en relation avec l’utilisation du site <a href="https://www.thomas-roess.fr">https://www.thomas-roess.fr</a> est soumis au droit français. 
                    En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Colmar</p>
                </div>
            </div>
        </div>
    </div>
    <script src="lib/swiper-bundle.min.js"></script>
    <script src="lib/anime.min.js"></script>
    <script src="scripts/script.js"></script>
    <!--<script src="https://smtpjs.com/v3/smtp.js"></script>-->
</body>
</html>