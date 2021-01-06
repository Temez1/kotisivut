---
title: Nettisivujen tekeminen osa 2
subtitle: ''
date: '2021-01-05'
excerpt: >-
  Tämä osa ryhtyy tuumasta toimeen. Käsiteltävänä on alkuun pääseminen,
  nettisivujen suorituskykyyn liittyvät aspektit ja lopuksi yhteenveto.
template: post
thumb_image: images/stackbit-logo.png
---
Tämä osa ryhtyy tuumasta toimeen. Käsiteltävänä on alkuun pääseminen, nettisivujen suorituskykyyn liittyvät aspektit ja lopuksi yhteenveto. Aiemmassa osassa oli johdantoa aiheeseen. Sen lukeminen ei ole välttämätöntä tämän osan kannalta, mutta mikäli kiinnostaa tietää enemmän esimerkiksi osaamistasostani, niin aloita siitä.

[Osa 1, Jodanto](/blog/nettisivujen-tekeminen-osa-1)

## Nettisivujen ["Hello world"](https://www.urbandictionary.com/define.php?term=hello%20world)
Kuten aiemmassa osassa mainitsin Stackbit on kaiken yhdistävä palvelu, joka tarjoaa kaiken alusta loppuun nettisivujen tekemiseksi. Ei ole oikeastaan montaa asiaa, mitä jää edes itse tehtäväksi. Työnkulun voi tiivistää oikeastaan pariin askeleeseen. Ennen kuin stressaat teknista jargonia niin mainitsen jo nyt, että minun ei tarvinnut kirjoittaa riviäkään koodia eli kaiken pystyi tekemään ilman minkäänlaista teknistä kokemusta. Loppujen lopuksi ei ole tarvetta ymmärtää mitä konepellin alla tapahtuu ellei itseään kiinnosta. Kannattaa lukea ohjeet kertaalleen läpi ennen aloittamista.

1. Mene [Stackbitin osoitteeseen](https://app.stackbit.com/create)

2. Valitse pohja/teema mistä lähdet rakentamaan sivuasi. Tämän sivun pohjaksi valitsin Stackbitin [Exto](https://themes.stackbit.com/demos/exto/) teeman.

3. Valitse mieluisa [static site generaattori](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/) (SSG). Itse valitsin Gatsbyn, koska googlettelun perusteella se vaikutti itselleni mieluisimmalta. Rikas ekosysteemi tarkoittaen paljon jatkokehitysmahdollisuuksia, tukea googlettaessa ongelmia jne. Tarkempaa vertailua aiheesta löytyy paljonkin googlettaessa esim. Gatsby vs [Next](https://nextjs.org/) tai [Hugo](https://gohugo.io/), jotka ovat seuraavaksi suosituimpia SSG:ita.

4. Valitse itsellesi sopiva [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system). Itse en oikeastaan valinnut mitään, vaan käytin default Git tiedosto pohjaista sisällön muokkaamista eli suomeksi muokkaat suoraan tiedostoja, joista generoituu nettisivu. En myöskään viitsinyt opetella mitään uutta ja tämä yksinkertainen tapa toimii Stackbit Studion kanssa kuin unelma.

5. Keksi projektillesi sopiva nimi ja luo nettisivu. Tämän tekemiseksi sinun pitää kirjautua Stackbitin palveluun. Voit tehdä tämän esimerkiksi Google tunnuksillasi.

Sitten vaan luomaan sisältöä Stackbit Studiolla! Kuva, tai ainakin GIF, kertoo enemmän kuin tuhat sanaa.
![Stackbit studion avulla sisällön muokkaamista](/images/stackbit-studio-editing.gif)

Sisällön muokkaaminen on siis todella helppoa ja [markdown](https://en.wikipedia.org/wiki/Markdown) syntaksi oli itselleni ennestään tuttua. Sitä tarvitsi lähinnä kuvien lisäämiseen tekstin sekaan, mikä toimii käytännössä syntaksilla

```
![alt-text](/images/kuvannimi.png)
```

, missä "kuvannimi.png" on [lähettämäsi](https://www.stackbit.com/docs/using-stackbit/editing-content/#image_editing) kuvan nimi kotikoneeltasi ja [alt-text](https://www.saavutettavasti.fi/kuva-ja-aani/kuvat/) on kuvaa kuvaava teksti.

Mikäli tarvitsee apua Stackbit Studion käyttöön, niin [Stackbitin dokumentaatio](https://www.stackbit.com/docs/using-stackbit/editing-content/) videotutoriaaleineen on hyvä siinä.

## Suorituskyky

Vinkki mitä tulee nettisivujen suorituskykyyn on: Pakkaa kuvasi ja pidä niiden resoluutio järkevänä niiden näkyvään kokoon verrattuna. Eli suomeksi ei ole mitään järkeä upottaa 4K kuvia esikatselukuvaan, joka on rajattu näkymään esimerkiksi 400x200 kokoisella alueella. Nyrkkisääntönä tiedostomuodolle on: .png kuville, joissa on suoria linjoja (tällä sivustolla kuvankaappaukset, logot joissa tekstiä yms.) ja .jpg valokuville.

Kuvat ovat varmaan rajuin asia, millä voi tehdä hyvin hitaita sivuja. Tämä johtuu siitä, että ylisuuret kuvat kestävät latautua pitkään, eikä niiden odottelu ole kovin mielekästä puuhaa. Tämän sivun pohjissa olikin valmiiksi jo paikat sekä pienelle esikatselukuvalle (eng. thumbnail), että itse artikkelin suuremmalle kuvalle. Eli alla olevassa kuvankaappauksessa näkyvät "Featured Image" (esikatselukuva) ja Alternative Featured Image (eli esimerkiksi portfolioni [projektin kuva](/portfolio/ohjelmointi-3/))

![Kuvankaappaus Stackbit Studio editorista, jossa näkyy esikatselukuvan ja artikkelin suuremman kuvan sijainnit.](/images/featured-and-alternative-image-screenshot.png)

Näin ollen kannattaa sama kuva tarjota sekä korkea-, että matalaresoluutioisena. Itse käytin vanhaa kunnon Paint:ia tähän yksinkertaiseen kuvien muokkaamiseen. Lopuksi pakkasin vielä kuvat [TinyPNG](https://tinypng.com/):llä, joka ei ainakaan omiin silmiin huonontanut kuvia liikaa, vaikka pienensi niitä keskimäärin 40-60 prosenttia!

Lopuksi kannattaa vielä ajaa nettisivut Googlen Lighthouse tuotteen avulla, sen voi tehdä suoraan [täällä](https://developers.google.com/speed/pagespeed/insights/). Se automaattisesti etsii pahimmat virheet ja tarjoaa analyysin nettisivuistasi. Kannattaa kiinnittää huomiota erityisesti mobiilianalyysin tulokseen, sillä mobiili on nykyään lähes puolet käytöstä Suomessa ainakin jonkun [tilaston](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/finland) mukaan. Ja sitä suurempi syy on se, että mobiililla suorituskyky ja latausajat ovat kriittisempiä kuin kotikoneella useimmiten. Riippuen toki kodin yhteyksistä.

Omiin tuloksiini olin tyytyväinen. Ei näitäkään kannata liikaa tuijotella, vaan ottaa enemmänkin suuntaa antavana ja lukea hiukan mitä työkalu löytää kritisoitavaa nettisivuista. Kannattaa myös huomata, että aivan stabiili ei työkalu myöskään ole ja tulokset muuttuvat hiukan ajokertojen välillä. Toinen hyvä työkalu on [dead link checker](https://www.deadlinkchecker.com/) mikä varmistaa nettisivujesi linkkien toimivuuden. Virheelliset linkit ovat aina epämiellyttäviä.

Lighthousen tulos mobiililla

![Performance 90, Accessibility 94, Best Practices 93 ja SEO 100. Asteikolla nollasta sataan.](/images/lighthouse-mobile.png)

Lighthousen tulos pöytäkoneella

![Performance 99, Accessibility 93, Best Practices 93 ja SEO 100. Asteikolla nollasta sataan.](/images/lighthouse-desktop.png)

## Oma domain eli verkkotunnus (vapaaehtoinen)

Mikäli haluat persoonallisen verkkotunnuksen, pitää sinun valitettavasti maksaa siitä. Se ei kuitenkaan paljoa maksa. Itse ostin omani 9€ vuosihintaan [Domainhotellista](https://www.domainhotelli.fi/). Muista tarkistaa, että käyttämäsi domain on [ohjeiden](https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/millainen-hyva-verkkotunnus) mukainen. Luultavasti on, ellei joku ole rekisteröinyt haluamaasi verkkotunnusta esimerkiksi yrityksen nimenä.

Voit käyttää domainhotellin omaa DNS eli suomeksi nimipalvelinta (Nimipalvelin yksinkertaisesti muuttaa nimesi IP osoitteeksi, joka on siis numeerinen osoite, jota tietokoneet käyttävät kommunikoimiseen keskenään.). Itse kuitenkin halusin käyttää Netlifyn omaa nimipalvelinta, jotta saan automaattisesti ja ilmaiseksi luodun [sertifikaatin](https://docs.netlify.com/domains-https/https-ssl/), joka tarkoittaa turvattua yhteyttä ja esimerkiksi parempaa [SEO](https://fi.wikipedia.org/wiki/Hakukoneoptimointi):ta eli hakukoneoptimointia.

Jälleen kerran kannattaa lukea ohjeet kertaalleen läpi ennen aloittamista.

1. Rekisteröidy Netlify palveluun avaamalla Stackbit Studion oikeassa yläkulmassa oleva "Settings" kohta ja  painamalla "Claim Netlify Project". Tämä onnistuu käyttämällä esimerkiksi GitHub tunnusta. Voit luoda senkin ilmaiseksi kun painat GitHub ja sen jälkeen Create an account.
2. Keksi itsellesi sopiva verkkotunnus ja tarkista sen saatavuus etsimällä sitä esimerkiksi [Domainhotelli](https://www.domainhotelli.fi/):sta.
3. Siirry tilaamaan valitsemaasi verkkotunnusta. Tässä vaiheessa voit säätää nimipalvelimen osoitteen käyttämään Netlifyn nimipalvelinta, mikäli haluat itsellesi aiemmin mainitsemani ilmaisen sertifikaatin sivustollesi. Suosittelen.
4. (Netlifyn nimipalvelin käyttöön). 

## Loppusanat

Kokemukseni Stackbitin käytöstä oli yllättävän sulava. Kaikki kriittiset toiminnot toimivat ja pienet säädöt sai säädettyä suhteellisen kivuttomasti. Stackbit Studion käytettävyys oli mielestäni erinomainen, vaikkakin jotkin asiat aiheuttivat aluksi hämmennystä. Kuten aiemmin mainitsemani Featured Imagen ja Alternative Featured Imagen ero. Tämäkin kuitenkin selvisi yrityksen ja erehdyksen kautta.

Mainittakoon vielä, että Stackbitin hinnoittelu on vielä epäselvää, mutta he ovat omien sanojensa mukaan luvanneet, että harrastelumeininkiin palvelu tulee pysymään ilmaisena.

> However, we'll always offer a free plan for personal websites in support of a modern, open web. If you're currently working on a free project, your site will remain free with all existing features, even when we finish introducing our pricing.

Jokaiselle varmasti tulee jotakin vastaan. Toivottavasti ei mitään ylitsepääsemätöntä mistä ei selviä googlen avulla.
Mikäli näin on, tai heräsi jotain kommentoitavaa, niin [ota yhteyttä](/yhteystiedot). Voin näin ollen lisätä tähän postaukseen asioita mitä ei itselleni tullut mieleen.