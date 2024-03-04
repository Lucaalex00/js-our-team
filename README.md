# Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

# MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto

# MILESTONE 2:
    stampare le stesse informazioni su DOM sottoforma di stringhe

# BONUS 1:
    trasformare la stringa foto in una immagine effettiva

# BONUS 2:
    organizzare i singoli membri in card/schede

# Consigli del giorno:
    Ragioniamo come sempre a step.
    Prima la logica in italiano e poi traduciamo in codice.
    console.log() è nostro amico.

/////////////////////////////////////

# Description

- Tramite la const 'team', cicliamo for-in per recuperare il SINGOLO oggetto della lista e stampiamo AD OGNI CICLO il valore di .name, .role, .image

- Ad ogni ciclo dell for-in, andiamo a inserire all'interno della DOM l'elemento con valore di team[i], che sarà composto da name, role, image
- Creiamo il nostro contenitore dentro la DOM, recuperiamo l'elemento tramite queryselector o altro.
- Tramite un insertadjacentHTML andiamo a inserire il contenuto di ogni singolo ELEMENTO dell'ARRAY ciclato in precedenza al nostro contenitore nella DOM.
OPPURE
- Andiamo a creare 3 elementi (name,role,image) a cui associamo i valori all'interno dell'elemento.

- Creare un elemento img **(SE NON FATTO IN PRECEDENZA)** con ATTRIBUTE src= 'valore di image' e andiamo a stamparlo in pagina all'interno del nostro contenitore nella DOM.

-Creiamo **X** card tramite HTML o in modo dinamico tramite JS con il document.createElement('card')
**USIAMO BOOTSTRAP PERCHE' SONO PIGRO**
- Associamo classi e testo all'interno e poi con l'appendChild andiamo a inserire sotto OGNI 'card', l'elemento ciclato.

