const ispiti = [
    {
        naziv: 'AISP',
        prijavljen: false
    },
    {
        naziv: 'A3',
        prijavljen: false
    },
    {
        naziv: 'KIAA',
        prijavljen: false
    },
    {
        naziv: 'A2',
        prijavljen: true
    },
    {
        naziv: 'UVIT',
        prijavljen: true
    },
    {
        naziv: 'OM',
        prijavljen: false
    },
    {
        naziv: 'OOP',
        prijavljen: true
    },
    {
        naziv: 'OA',
        prijavljen: false
    },
    {
        naziv: 'OS',
        prijavljen: false
    }
];

const ul1 = document.getElementById('roditelj1');
const ul2 = document.getElementById('roditelj2');
/*
const lista1 = document.getElementsByClassName('neprijavljeni');
if(lista1.length > 0){
    for(let i = 0; i< lista1.length; i++){
        lista1[i].addEventListener('click', function(){
            const text1 = lista1[i].textContent;
            ul1.removeChild(lista[i]);

            const noviCvor = document.createElement('li');
        noviCvor.textContent = text1;
        noviCvor.setAttribute('class', 'prijavljen');

        ul2.appendChild(noviCvor);
            
        })
        
    }

    
}

*/


for(let i =ispiti.length -1; i>= 0; i--){
    const id = ispiti[i].naziv;
    const stariCvor = document.getElementById(id);
   // console.log(id);    

   stariCvor.addEventListener('click', function(){

        const text = stariCvor.textContent;
        //console.log(text);
        //console.log(ispiti[i].prijavljen);

        if(ispiti[i].prijavljen == 0){
            ul1.removeChild(stariCvor);

            const noviCvor = document.createElement('li');
            noviCvor.textContent = text;

          //  console.log("Usao sam u petlju i evo ga i");
            //console.log(i);

            ul2.appendChild(noviCvor);

            ispiti[i].prijavljen = true;
            console.log("Evo ga koliki je prijavljen");
            console.log(ispiti[i].prijavljen);

            i = ispiti.lenght -1;
        }

        else{
            ul2.removeChild(stariCvor);

            const noviCvor = document.createElement('li');
            noviCvor.textContent = text;

          //  console.log("Usao sam u petlju i evo ga i");
            //console.log(i);

            ul1.appendChild(noviCvor);

            ispiti[i].prijavljen = false;

            console.log("Evo ga koliki je prijavljen");
            console.log(ispiti[i].prijavljen);
            i = ispiti.lenght -1;


        }
    })

    
}






/*
const kiaa = document.getElementById("KIAA");

kiaa.addEventListener('click', function(){

    const text = kiaa.textContent;

    ul1.removeChild(kiaa);

    const noviCvor = document.createElement('li');
    noviCvor.textContent = text;

    ul2.appendChild(noviCvor);


})
*/