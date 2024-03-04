/*
TOOLS
- let/const
- array
- for
- forin
- queryselector or others
- createelement & others
- appendchild
- DOM manipulation elements
*/



const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//Keep values from any element of 'TEAM' object's array
for (const key in team) {
    /* console.log(team[key]) */
    //keep and stamp
    let nome = team[key].name;
    let ruolo = team[key].role;
    let foto = team[key].image;
    console.log(`il nome è ${nome}, il suo ruolo è ${ruolo} e la sua foto è ${foto}`)




}
//keep from dom the DIV ELEMENT .container
const container = document.querySelector('.container')
//transform that key in a string if NOT, and stamp in DOM
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member.name)
    container.innerHTML += `<h3>Nome: ${member.name}</h3>  <div>Ruolo: ${member.role}<div> <img>Foto: ${member.image}</img>`

}

