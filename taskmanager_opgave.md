```
    Project : Task Manager
    Author  : Media College WEB.
    Type    : Frontend / React / Crud
```

# Task Manager.

## Indledning.
Task manager opgaven består i at lave frontenden til at styre opgaver imellem en række brugere.

Der forefindes ikke et design på nuværende tidspunkt og der forventes i første omgang en fornuftig prototype. Senere i dette dokument beskrives krav til siden.

Backenden er udarbejdet og der medfølger en `postman.json` som viser hvordan man tilgår dem i detaljer.

## Backend.

:bulb: læs `readme.md` for opsætning.

Når backenden er på plads og du kan benytte den gennem postman vil du se der er oprettet 3 brugere og 1 task tilknyttet vores `admin` bruger.

### Login Oplysninger for de tre oprettede users.
1. Admin
    * mail: taskmaster@mcdm.dk
    * pass: taskmaster
    * *role: admin*

1. User
    * mail: jens@mcdm.dk
    * pass: jens
    * *role: user*

3. User
    * mail: hanne@mcdm.dk
    * pass: hanne
    * *role: user*

## Krav til site.

### Task

Et fuldt opgave/task objekt ser således ud.
```json
{
    "title":"Opgave 1",
    "description":"Vigtig Opgave",
    "status":"progress",
    "deadline":"2022-05-04",
    "assignee":  <-- Id på den bruger opgaven er tilknyttet. 
}
```

Status kan være `open` (default), `progress', 'done`.  

### Forside.

På forsiden skal man møde en sign-In formular.

* email og password.

Der er to typer der kan logge ind.

1. Admin
2. User

Det er forskelligt hvad der skal præsenteres når alt efter hvilken type/role man er logget ind med.

Efter login vises en liste af opgaver afhængig af hvem der er logget ind.

### Opgave/Rolle fordeling.

#### Admin

En `role:admin` skal kunne:

* Oprette, Slette, og Redigere en opgave.
* Skal kunne tildele en opgaven til en bruger, Jens, Hanne, eller admin


#### Bruger skal kunne

En `role:user` skal kunne:

* Tildele en opgave til sig selv.
* Skal kunne ændre status på opgaven, `open`, `progress`, `done`.

### Visning/Ui af opgaver.

Det skal være muligt at filtrere listen/lister af opgaver, hvor det giver mening.

Generelt skal man kunne filtrere på  "mine opgaver", status, deadline.

#### `admin` skal kunne.

Skal kunne filtrer yderligere på de forskellige brugere.

## Design / UI.

Det er op til dig at skabe et design. Vi ønsker "less is more".

Det skal være muligt altid at kunne se hvem der er "sign´et ind" og det vil være godt hvis man kan logge sig ud, samme sted.

En `user`" skal **ikke** kunne oprette eller slette opgaver, det er kun `admin` rollen der skal have denne mulighed.

## Del 2.

Det skal være muligt for en `user` at redigere sine bruger oplysninger og profil billede.
En `user` **skal ikke** kunne ændre rolle.

## Del 3. 

Det skal være muligt fra forside `sign-in` formularen at oprette sig som "ny bruger".
En ny bruger fra forsiden skal oprettes med `user` som rolle.

