---
title: Nettisivujen tekeminen osa 2
subtitle: ''
date: '2021-01-05'
excerpt: >-
  Nettisivujen tekeminen on oikeasti helppoa ja vieläpä ilmaista. Tämä osa
  käsittelee osaamistasoni, työkalujen valintaa ja työkaluksi valitun Stackbitin
  ominaisuuksia.
template: post
thumb_image: images/stackbit-logo.png
---
Nettisivujen tekeminen on oikeasti helppoa ja vieläpä ilmaista. Tämä osa käsittelee osaamistasoni, työkalujen valintaa ja työkaluksi valitun Stackbitin ominaisuuksia.


Kuten aiemmassa osassa mainitsin Stackbit on kaiken kattava palvelu, joka tarjoaa kaiken alusta loppuun nettisivujen tekemiseksi. Ei ole oikeastaan montaa asiaa, mitä jää edes itse tehtäväksi. Työnkulun voi tiivistää oikeastaan pariin askeleeseen. Ennen kuin stressaat teknista jargonia niin mainitsen jo nyt, että minun ei tarvinnut kirjoittaa riviäkään koodia eli kaiken pystyi tekemään ilman minkäänlaista teknistä kokemusta. Loppujen lopuksi ei ole tarvetta ymmärtää mitä konepellin alla tapahtuu ellei itseään kiinnosta.

1. Valitse pohja/teema mistä lähdet rakentamaan sivuasi. Tämän sivun pohjaksi valitsin Stackbitin [Exto](https://themes.stackbit.com/demos/exto/) teeman.

2. Valitse mieluisa [static site generaattori](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/) (SSG). Itse valitsin Gatsbyn, koska googlettelun perusteella se vaikutti itselleni mieluisimmalta. Rikas ekosysteemi tarkoittaen paljon jatkokehitysmahdollisuuksia, tukea googlettaessa ongelmia jne. Tarkempaa vertailua aiheesta löytyy paljonkin googlettaessa esim. Gatsby vs [Next](https://nextjs.org/) tai [Hugo](https://gohugo.io/), jotka ovat seuraavaksi suosituimpia SSG:ita.

3. Valitse itsellesi sopiva [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system). Itse en oikeastaan valinnut mitään, vaan käytin default Git tiedosto pohjaista sisällön muokkaamista eli suomeksi muokkaat suoraan tiedostoja, joista generoituu nettisivu. En myöskään viitsinyt opetella mitään uutta ja tämä yksinkertainen tapa toimii Stackbit Studion kanssa kuin unelma.

4. Keksi projektillesi sopiva nimi ja luo nettisivu!

Sitten vaan luomaan sisältöä Stackbit Studiolla! Kuva, tai ainakin GIF, kertoo enemmän kuin tuhat sanaa.
![Stackbit studion avulla sisällön muokkaamista](/images/stackbit-studio-editing.gif)

Itselleni tuli luonnostaan sisällön muokkaaminen ja [markdown](https://en.wikipedia.org/wiki/Markdown) syntaksi oli itselleni ennestään tuttua. Mikäli tarvitsee apua Stackbit Studion käyttöön, niin [Stackbitin dokumentaatio](https://www.stackbit.com/docs/using-stackbit/editing-content/) videotutoriaaleineen on hyvä siinä.

## Suorituskyky

Vinkki mitä tulee nettisivujen suorituskykyyn on: Pakkaa kuvasi ja pidä niiden resoluutio järkevänä niiden näkyvään kokoon verrattuna. Eli suomeksi ei ole mitään järkeä upottaa 4K kuvia esikatselukuvaan, joka on rajattu näkymään esimerkiksi 400x200 kokoisella alueella.

Kuvat ovat varmaan rajuin asia, millä voi tehdä hyvin hitaita sivuja. Tämä johtuu siitä, että ylisuuret kuvat kestävät latautua pitkään, eikä niiden odottelu ole kovin mielekästä puuhaa. Tämän sivun pohjissa olikin valmiiksi jo paikat sekä pienelle esikatselukuvalle (eng. thumbnail), että itse artikkelin suuremmalle kuvalle. Näin ollen kannattaa sama kuva tarjota sekä korkea-, että matalaresoluutioisena. Itse käytin vanhaa kunnon Painttia tähän yksinkertaiseen kuvien muokkaamiseen. Lopuksi pakkasin vielä kuvat [TinyPNG](https://tinypng.com/):llä, joka ei ainakaan omiin silmiin huonontanut kuvia, vaikka pienensi niitä keskimäärin 30-50 prosenttia!

Lopuksi kannattaa vielä ajaa nettisivut Googlen [Ligthhouse](https://developers.google.com/web/tools/lighthouse) tuotteen avulla. Se automaattisesti etsii pahimmat virheet ja tarjoaa analyysin nettisivuistasi. Voit tehdä sen suoraan [selaimessa](https://developers.google.com/speed/pagespeed/insights/)