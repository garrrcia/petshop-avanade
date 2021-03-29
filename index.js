const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Obama',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Beagle',
        peso: 3,
        tutor: 'Renata',
        contato: '(81)9999-5999',
        vacinado: true,
        serviços: ['banho','tosa']
    },
    {
        nome: 'Luluguinha',
        tipo: 'tartaruga',
        idade: 3,
        raca: 'Cágado',
        peso: 3,
        tutor: 'Cristina',
        contato: '(81)9999-5252',
        vacinado: false,
        serviços: ['banho','tosa']
    },
    {
        nome: 'Priscila',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Old English Sheepdog',
        peso: 3,
        tutor: 'Globo',
        contato: '(81)9999-5536',
        vacinado: true,
        serviços: ['banho','tosa']
    }
];

/* const listarPets = () => {
    for(let i = 0; i < pets.length; i++) {
        console.log(pets[i].nome);
    }
} */
 const listarPets = () => {
     for (let pet of pets ) {
         //template string
         console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
     }
 }

listarPets();
//console.log(pet);

