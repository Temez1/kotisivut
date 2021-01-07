---
title: Nettisivujen tekeminen osa 2
subtitle: ''
date: '2021-01-06'
excerpt: >-
  Tämä osa ryhtyy tuumasta toimeen. Käsiteltävänä on alkuun pääseminen,
  nettisivujen suorituskykyyn liittyvät aspektit, oman domainin hankkiminen ja
  lopuksi yhteenveto.
template: post
thumb_image: images/stackbit-logo.png
---
Tämä osa ryhtyy tuumasta toimeen. Käsiteltävänä on alkuun pääseminen, nettisivujen suorituskykyyn liittyvät aspektit, oman domainin hankkiminen ja lopuksi yhteenveto. Aiemmassa osassa oli johdantoa aiheeseen. Sen lukeminen ei ole välttämätöntä tämän osan kannalta, mutta mikäli kiinnostaa tietää enemmän esimerkiksi osaamistasostani, niin aloita siitä.

[Osa 1, Jodanto](/blog/nettisivujen-tekeminen-osa-1)

## Nettisivujen ["Hello world"](https://www.urbandictionary.com/define.php?term=hello%20world)
Kuten aiemmassa osassa mainitsin Stackbit on kaiken yhdistävä palvelu, joka tarjoaa kaiken alusta loppuun nettisivujen tekemiseksi. Ei ole oikeastaan montaa asiaa, mitä jää edes itse tehtäväksi. Pakollisia vaiheita on kaksi. Tein minuutin kestävän videon, miten aloitat nettisivujen luomisen [Stackbitin](https://www.stackbit.com/) avulla. [Katso video](https://youtu.be/QmkRRSNZtI4) 

1. Valitse pohja/teema mistä lähdet rakentamaan sivuasi. Tämän sivun pohjaksi valitsin Stackbitin [Exto](https://themes.stackbit.com/demos/exto/) teeman.

2. Keksi projektillesi sopiva nimi ja luo nettisivu. Tämän tekemiseksi sinun pitää kirjautua Stackbitin palveluun. Voit tehdä tämän esimerkiksi Google-tunnuksillasi.

Ei ole tarvetta ymmärtää mitä konepellin alla tapahtuu ellei itseään kiinnosta.

Sisällön muokkaaminen on helppoa ja [markdown](https://en.wikipedia.org/wiki/Markdown) syntaksi oli itselleni ennestään tuttua. Sitä tarvitsi lähinnä kuvien lisäämiseen tekstin sekaan, mikä toimii käytännössä syntaksilla

```
![alt-text](/images/kuvannimi.png)
```

, missä "kuvannimi.png" on [lähettämäsi](https://www.stackbit.com/docs/using-stackbit/editing-content/#image_editing) kuvan nimi kotikoneeltasi ja [alt-text](https://www.saavutettavasti.fi/kuva-ja-aani/kuvat/) on kuvaa kuvaava teksti.

Mikäli tarvitsee apua Stackbit Studion käyttöön, niin [Stackbitin dokumentaatio](https://www.stackbit.com/docs/using-stackbit/editing-content/) videotutoriaaleineen on hyvä siinä.

## Suorituskyky

Vinkki nettisivujen suorituskyvyn parantamiseksi: pakkaa kuvasi ja pidä niiden resoluutio järkevänä niiden näkyvään kokoon verrattuna. Eli toisinsanoen ei ole mitään järkeä upottaa 4K kuvia esikatselukuvaan, joka on rajattu näkymään esimerkiksi 400x200 kokoisella alueella.

> Pakkaa kuvasi ja pidä niiden resoluutio järkevänä niiden näkyvään kokoon verrattuna.

Kuvat ovat varmaan rajuin asia, millä voi tehdä hyvin hitaita sivuja. Tämä johtuu siitä, että ylisuurien kuvien lataaminen kestää pitkään, eikä niiden odottelu ole kovin mielekästä puuhaa. Nyrkkisääntönä tiedostomuodoille on: käytä muotoa .png kuville, joissa on suoria reunoja (esim. tällä sivustolla kuvankaappaukset, logot joissa tekstiä yms.) ja .jpg valokuville. Lisätietoa tiedostojen pakkaamisesta löydät esim. [täältä](https://fi.wikipedia.org/wiki/Tiedonpakkaus) ja jpg vs png [täältä](https://undsgn.com/jpg-vs-png/).

Tämän sivun pohjissa olikin valmiiksi jo paikat sekä pienelle esikatselukuvalle (eng. thumbnail), että itse artikkelin suuremmalle kuvalle. Eli alla olevassa kuvankaappauksessa näkyvät "Featured Image" (esikatselukuva) ja Alternative Featured Image (eli esimerkiksi portfolioni [projektin kuva](/portfolio/ohjelmointi-3/))

![Kuvankaappaus Stackbit Studio editorista, jossa näkyy esikatselukuvan ja artikkelin suuremman kuvan sijainnit.](/images/featured-and-alternative-image-screenshot.png)

Näin ollen kannattaa sama kuva tarjota sekä korkea-, että matalaresoluutioisena. Itse käytin vanhaa kunnon Paint:ia tähän yksinkertaiseen kuvien muokkaamiseen. Lopuksi pakkasin vielä kuvat [TinyPNG](https://tinypng.com/):llä, joka ei ainakaan omiin silmiin huonontanut kuvia liikaa, vaikka pienensi niitä keskimäärin 40-60 prosenttia!

Lopuksi kannattaa vielä ajaa nettisivut Googlen Lighthouse tuotteen avulla, sen voi tehdä suoraan [täällä](https://developers.google.com/speed/pagespeed/insights/). Se automaattisesti etsii pahimmat virheet ja tarjoaa analyysin nettisivuistasi. Kannattaa kiinnittää huomiota erityisesti mobiilianalyysin tulokseen, sillä mobiili on nykyään lähes puolet käytöstä Suomessa ainakin jonkun [tilaston](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/finland) mukaan. Ja sitä suurempi syy on se, että mobiililla suorituskyky ja latausajat ovat kriittisempiä kuin kotikoneella useimmiten. Riippuen toki kodin yhteyksistä.

Omiin tuloksiini olin tyytyväinen. Ei näitäkään kannata liikaa tuijotella, vaan ottaa enemmänkin suuntaa antavana ja lukea hiukan mitä työkalu löytää kritisoitavaa nettisivuista. Kannattaa myös huomata, että aivan stabiili ei työkalu myöskään ole ja tulokset muuttuvat hiukan ajokertojen välillä. Toinen hyvä työkalu on [dead link checker](https://www.deadlinkchecker.com/) mikä varmistaa nettisivujesi linkkien toimivuuden. Virheelliset linkit ovat aina epämiellyttäviä.

Lighthousen tulos mobiililla

![Performance 90, Accessibility 94, Best Practices 93 ja SEO 100. Asteikolla nollasta sataan.](/images/lighthouse-mobile.png)

Lighthousen tulos pöytäkoneella

![Performance 99, Accessibility 93, Best Practices 93 ja SEO 100. Asteikolla nollasta sataan.](/images/lighthouse-desktop.png)

## Oma domain eli verkkotunnus (vapaaehtoinen)

Mikäli haluat persoonallisen verkkotunnuksen, pitää sinun valitettavasti maksaa siitä. Se ei kuitenkaan maksa paljoa. Itse ostin omani 9€ vuosihintaan [Domainhotellista](https://www.domainhotelli.fi/). Muista tarkistaa, että käyttämäsi domain on [ohjeiden](https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/millainen-hyva-verkkotunnus) mukainen. Luultavasti on, ellei joku ole rekisteröinyt haluamaasi verkkotunnusta esimerkiksi yrityksen nimenä.

Voit käyttää domainhotellin omaa DNS eli suomeksi nimipalvelinta (Nimipalvelin yksinkertaisesti muuttaa nimesi IP osoitteeksi, joka on siis numeerinen osoite, jota tietokoneet käyttävät kommunikoimiseen keskenään.). Itse kuitenkin halusin käyttää Netlifyn omaa nimipalvelinta, jotta saan automaattisesti ja ilmaiseksi luodun [sertifikaatin](https://docs.netlify.com/domains-https/https-ssl/), joka tarkoittaa turvattua yhteyttä ja esimerkiksi parempaa [SEO](https://fi.wikipedia.org/wiki/Hakukoneoptimointi):ta eli hakukoneoptimointia.

Tein videon, kuinka tämä käytännössä tapahtuu. [Katso video](https://youtu.be/rfcSv9lm5YQ)

## Loppusanat

Kokemukseni Stackbitin käytöstä oli yllättävän sulava. Kaikki kriittiset toiminnot toimivat ja pienet säädöt olivat suhteellisen kivuttomia. Stackbit Studion käytettävyys oli mielestäni erinomainen, vaikkakin jotkin asiat aiheuttivat aluksi hämmennystä. Kuten aiemmin mainitsemani Featured Imagen ja Alternative Featured Imagen ero. Tämäkin kuitenkin selvisi yrityksen ja erehdyksen kautta.

Mainittakoon, että Stackbitin hinnoittelu on vielä epäselvää, mutta he ovat omien sanojensa mukaan luvanneet, että harrastelumeininkiin palvelu tulee pysymään ilmaisena.

> However, we'll always offer a free plan for personal websites in support of a modern, open web. If you're currently working on a free project, your site will remain free with all existing features, even when we finish introducing our pricing.

Jokaiselle varmasti tulee joitakin ongelmia vastaan. Toivottavasti ei mitään ylitsepääsemätöntä mistä ei selviä googlen avulla.
Mikäli näin on, tai heräsi jotain kommentoitavaa, niin [ota yhteyttä](/yhteystiedot). Voin näin ollen lisätä tähän postaukseen asioita mitä ei itselleni tullut mieleen.

Tämän nettisivun lähdekoodin löydät [täältä](https://github.com/Temez1/kotisivut)