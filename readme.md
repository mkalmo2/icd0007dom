Brauser ja DOM

1. Kirjutage kood, mis teeb nähtavaks index.html-is oleva DIV-i ID-ga
   "result-div" ja paneb DIV-i ID-ga "result" sisuks "Hello".<br>
   
   Nähtavaks tegemiseks peaks muutma objekti stiili "display".
   Väärtuseks tuleb panna "block".<br>
   
2. Tehke nii, et nupule vajutades kuvatakse lehel "Hello".<br>

3. Failis ex3.html on div-ide struktuur ja selle sees mõned numbrid. 
   Kirjutage kood, mis värvib numbrid vastavatl sellele, mis on nende ümbritseva 
   div-i "data-color" atribuudi väärtus.<br>
   
   Vajalikud elemendid leidate nii:

   ```     
   document.querySelectorAll(<css selector>);
   ```    
   Atribuudi väärtuse saate funktsiooniga element.getAttribute(\<atribuudi nimi\>).<br>
   Elemendi värvi saate muuta nii: element.style.color = \<värvi nimi\>.<br>

4.<br> 
  a) Kirjutage funktsioon render(), mis teeb iga items listi kirje kohta 
     ühe LI elemendi. Kasutada on funktsioon addLi(), mis võtab argumendiks 
     item-i, teeb DOM elemendi ja lisab selle UL elemendi alla.<br><br>
    
  b) Kirjutage funktsioon addItem(), mis lisab items listi uue kirje.<br>
    
  Pärast kirje lisamist kutsuge välja funktsioon render() vaate uuendamiseks.<br>
     
  Topelt kirjete vältimiseks lisage funktsioonile render() järgmine kood:<br>
 
  ```ul.replaceChildren();```
    
  Argumendina saab määrata, millega olemasolevad alamsõlmed asendada.<br>
  Kui argumente pole, siis on tulemuseks kustutamine.<br><br>

  c) Lisage nupule kood, mis võtab input kasti väärtuse ja lisab listi 
  uue item-i.<br><br>

  Näide on failis samples/register-click-listener.html.<br>

  d) Kirjutage funktsioon deleteItem(), mis võtab sisse id ja kustutab 
  items list-ist vastava id-ga elemendi ja värskendab vaadet (render()).
  Elemendi saab mugavalt eemaldada filtreerides listi tingimusega: each.id !== id <br><br>

  e) Lisage iga LI elemendi juurde kustutamise nupp. Selleks peate lisama addLi()
  funktsioonile järgmise koodi:
     
  ```
  const b = document.createElement('button');
  b.innerText = 'X';
  b.onclick = function () {
      deleteItem(item.id);
  };
  li.appendChild(b);
  ```

Seletused ja lahendused: https://youtu.be/mnbjpjO_pUI
