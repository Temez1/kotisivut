---
title: Kotisivujen tekeminen osa 1
subtitle: ''
date: '2021-01-04'
excerpt: >-
  Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum massa
  massa primis. Tempus condimentum tempus non ac varius cubilia adipiscing
  placerat lorem.
template: post
thumb_image: images/stackbit-logo.png
---
Nettisivujen tekeminen on oikeasti helppoa ja vieläpä ilmaista. Tämä osa käsittelee osaamistasoni, työkalujen valintaa ja työkaluksi valitun Stackbitin ominaisuuksia.

Seuraavassa osassa käsittelen varsinaiseen toteutukseen liittyvät asiat.

## Osaamistasoni

En ole koskaan tehnyt nettisivuja aiemmin. Oma web taustani on lähinnä harrastuneisuutta Upskillin [Ruby on rails](https://github.com/Temez1/upskill_saas_tutorial) ja Helsingin yliopiston [fullstack](https://github.com/Temez1/fullstackOpen2019) kurssin muodossa eli en aivan noviisi kuitenkaan ole. Viime kesän kesätöitä en laske mukaan, koska syvään päähän Kubernetes, Docker, Jenkins ja Ansible maailmaan syventyminen ei suoraan auta tässä yhteydessä.

## Työkalujen valinta

Googlailin eri mahdollisuuksia pari viikkoa kun muutenkin pyörittelin tulevaa kandiaihettani "[MVP](https://fi.wikipedia.org/wiki/Pienin_toimiva_tuote) web stack" eli tapaa tehdä [SaaS](https://fi.wikipedia.org/wiki/Software_as_a_Service) sovellus nykypäivänä. Tästä mahdollisesti lisää tulevaisuudessa blogin muodossa.

Törmäsin ensin [JAMStackin](https://jamstack.wtf/) tapaan tehdä web sovelluksia. Aihetta googlaillessani törmäsin [Stackbit](https://www.stackbit.com/) palveluun. Oikeastaan tämä [video](https://www.youtube.com/watch?v=gdlQ1pJ46UQ) sai minut innostumaan palvelun kokeilusta. Kyseinen palvelu lupaili paljon. Oikeastaan **kaiken** yhdessä paketissa.

## Stackbitin ominaisuudet

Live editori *Stackbit Studio*, joka pysyy synkassa GitHubin eli tämän verkkosivun [lähdekoodin](https://github.com/Temez1/kotisivut) kanssa. Kaikki muutokset näkyvät välittömästi siis sekä silmissä, että lähdekoodissa. Tämä mahdollistaa myös yhteistyön verkkosivujen rakentamiseen koodareiden ja ei koodareiden välillä. Lisäksi niille, jotka tekee työkseen nettisivuja on varmasti kätevää kun voi näyttää asiakkaalle live preview kännykällä ja/tai konella.

Tarjolla olisi myös Beta vaiheessa oleva [A/B testaus](https://www.stackbit.com/docs/using-stackbit/a-b-testing-analytics/), mutta tämäkin on turhan edistynyt toiminnallisuus omiin tarpeisiini. Automaattinen [GitHub pohjainen CI/CD](https://docs.netlify.com/configure-builds/get-started/) toiminnallisuus on myös ominaisuus, jota ei osaa edes arvostaa. Eli käytännössä muutosten julkaiseminen nettisivulle tapahtuu yhden napin painalluksella.

[Hosting](https://fi.wikipedia.org/wiki/Webhotelli) on myös ilmaista [Netlify](https://www.netlify.com/):llä 100 GB:iin/kuukausi asti. Kaiken lisäksi Stackbitin käyttö on mahdollista monella eri [static site generaattorilla](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/) (SSG) ja [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system):llä, ei pelkästään käyttämälläni [Gatsbyllä](https://www.gatsbyjs.com/) ja suoraan editoimalla Git tiedostoja Stackbit Studiolla.