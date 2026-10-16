# FOGADÁS AI – nyilvános tájékoztató weboldal

A forrás a 2026-10-13-i Drive-mentett weboldal aktualizálása, nem a privát alkalmazás.
A forráskód nem tartalmazhat OAuth tokent, privát fogadási adatot vagy GitHub credentialt.

## Domain és GitHub Pages

Domain: fogadasai.de (Porkbun); Pages repo: bertalanbanhidi-ctrl/fogadasai-weboldal;
`CNAME`: fogadasai.de.

A GitHub Pages aktívvá tételéhez Settings → Pages → Deploy from a branch → main → /(root) → Save.
A Porkbun DNS-ében az apex A rekordokat a GitHub Pages hivatalos, aktuális címeire kell állítani, esetleges
ütköző parking rekordok eltávolításával. A `www` aldomainhez külön CNAME állítható be.
A GitHub Pages Custom domain mezőbe `fogadasai.de`, HTTPS tanúsítvány kiadása után Enforce HTTPS.

A tényleges domain és a HTTPS működését külön ellenőrizni kell. OAuth Branding / Audience
nem módosult a weboldal-fájlok feltöltésétől. A hét napos Testing token limit megszüntetéséhez
előbb Google Cloud Audience / Publishing status: In production, majd ellenőrzött új offline refresh token,
privát vaultba helyezés és 7 napon túli működési teszt kell.

## Biztonsági/jogi megjegyzés

Az oldal publikálása nem egyenlő Google OAuth ellenőrzésével vagy GDPR-jogi jóváhagyással.
Az adatvédelmi és felhasználói dokumentum a nyilvános oldal valós működését írja le, és elkülönítve
ismerteti a fejlesztés alatt álló kutatási háttérrendszert. Éles privát alkalmazás előtt a tényleges
adatkezelés, adatmegőrzés, adatfeldolgozói viszony és engedélykörök szakmai felülvizsgálata szükséges.

Az eredeti ZIP a felhasználó Google Drive-ján külön változatlanul marad.
