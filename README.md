# Weather app

- Aplikace na počasi je vytvořena pomoci Reactu + Vite
- Pro spuštění aplikace je zapotřebí stahnout node baličky, které nejsou současti programu, protože by zabíraly místo při posílání a stahování

```js

npm i

```

- Po úspěšném stažení balíčků můžeme zadat do terminalu příkaz

```js

npm run dev

```

- Jakmile se aplikace načte, ukáže v konzoli odkaz kde se aplikace spustila
- Po kliknutní na odkaz můžeme vidět prázdnou stránku se search barem

## Funkce aplikace

- Zadáme libovolné město, které se nachází v souboru **city.list.json**, aplikace nám ukáže předpověd počasi na dnešní den a následně na dalších 5 dnů
- **Forecast část** je udělaná tak, že ukazuje jaká bude teplota ve 12:00 a podle dat api ukazuje předpověd na **4-5 dní**

- Aplikace ukazuje:

  - Stát a název města
  - Aktuální den a čas
  - Aktuální teplotu
  - Podnebí
  - Vlhkost vzduchu
  - Rychlost větru
  - Atmosférický tlak

- Dále aplikace umožňuje přepínat mezi °C a °F
- Search bar umožňuje hledat města jak lowercase tak i uppercase

## Podporované prohlížeče

- Opera
- Microsoft Edge

## Vnitřní struktura programu

- Aplikace se děli ze tří hlavních komponentů
  1. Navbar - zde najdeme funkci pro **hledaní měst** společně s **Api**
  2. Current Weather - je rozdělen na další menší komponenty pro lepší přehlednost
  3. Forecast Weather - najdeme zde funkci pro získání teplotu na následujících 5 dnů
