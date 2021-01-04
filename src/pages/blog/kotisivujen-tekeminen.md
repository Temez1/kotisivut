---
title: Kotisivujen tekeminen
subtitle: ''
date: '2021-01-04'
excerpt: >-
  Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum massa
  massa primis. Tempus condimentum tempus non ac varius cubilia adipiscing
  placerat lorem.
template: post
thumb_image: images/stackbit-logo.png
---
En ole koskaan tehnyt nettisivuja aiemmin. Oma web taustani on lähinnä harrastuneisuutta Upskillin [Ruby on rails](https://github.com/Temez1/upskill_saas_tutorial) ja Helsingin yliopiston [fullstack](https://github.com/Temez1/fullstackOpen2019) kurssin muodossa eli en aivan noviisi kuitenkaan ole. Viime kesän kesätöitä en laske mukaan, koska syvään päähän Kubernetes, Docker, Jenkins ja Ansible maailmaan syventyminen ei suoraan auta tässä yhteydessä.

Googlailin mahdollisuuksia pari viikkoa kun muutenkin pyörittelin tulevaa kandiaihettani "[MVP](https://fi.wikipedia.org/wiki/Pienin_toimiva_tuote) web stack" eli tapaa tehdä [SaaS](https://fi.wikipedia.org/wiki/Software_as_a_Service) sovellus nykypäivänä. Tästä mahdollisesti lisää tulevaisuudessa blogin muodossa.

Törmäsin ensin [JAMStackin](https://jamstack.wtf/) tapaan tehdä web sovelluksia. Aihetta googlaillessani törmäsin [Stackbit](https://www.stackbit.com/) palveluun. Oikeastaan tämä [video](https://www.youtube.com/watch?v=gdlQ1pJ46UQ) sai minut innostumaan palvelun kokeilusta. Kyseinen palvelu lupaili paljon. Oikeastaan **kaiken** yhdessä paketissa.

Eli live editorin, joka pysyy synkassa GitHubin eli [lähdekoodin](https://github.com/Temez1/kotisivut) kanssa. Kaikki muutokset näkyvät välittömästi siis sekä silmissä, että lähdekoodissa. Tämä mahdollistaa myös yhteistyön verkkosivujen rakentamiseen. Tälle tosin itselläni ei ole tarvetta, mutta niile jotka tekee työkseen on varmasti kätevää kun voi näyttää asiakkaalle live preview kännykällä ja/tai konella. Tarjolla olisi myös [A/B testaus](https://en.wikipedia.org/wiki/A/B_testing), mutta tämäkin on turhan edistynyt toiminnallisuus omiin tarpeisiini. Automaattinen [GitHub pohjainen CI/CD](https://docs.netlify.com/configure-builds/get-started/) toiminnallisuus on myös ominaisuus, jota ei osaa edes arvostaa. Eli käytännössä muutosten julkaiseminen nettisivulle tapahtuu yhden napin painalluksella. Hosting on myös ilmaista Netlifyllä 100 GB/kuukausi asti. Kaiken lisäksi Stackbitin käyttö on mahdollista monella eri static site generaattorilla (SSG), ei pelkästään käyttämälläni Gatsbyllä.