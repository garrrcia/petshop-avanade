//chamar pacote moment
const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados); //.pets --> conectar com o objeto pets no bando de dados

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}


/* const listarPets = () => {
    for(let i = 0; i < pets.length; i++) {
        console.log(pets[i].nome);
    }
} */
 const listarPets = () => {
    for (let pet of bancoDados.pets ) {
         //template string
         console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

         for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    }
         // for para listar os serviços de cada pet
     
}

//listarPets();
//console.log(pet);

/* Crie uma função chamada **vacinarPet** que recebe um pet como 
parametro e altera o atributo **vacinado** para **true.**
Imprima uma mensagem avisando qual o pet foi vacinado */

const vacinarPet = pet => {
    //Verifica se o pet NAO esta vacinado
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`${pet.nome} está com as vacinas atualizadas!`)
    }
}

/* Crie uma nova função chamada **campanhaVacina** que percorre 
toda lista de pets e vacina todos os pets que precisam!
Imprima o numero de pets vacinados na campanha*/

const campanhaVacina = () => {
    console.log("Campanha de vacinação de 2021");
    console.log("Vacinando os animais...");

    let animaisVacinadosCampanha = 0; 
    for (let pet of bancoDados.pets) {
        if (!pet.vacinado) {
            //Reutiliza função ja criadad
            vacinarPet(pet);
            animaisVacinadosCampanha++;
        }
    }
    console.log(`${animaisVacinadosCampanha} foram vacinados com sucesso`);
}

/* Crie uma função chamada **adicionarPet** que adicione um novo cliente 
na lista, incluindo todos os atributos necessários.
Por ser um novo cliente, a lista de servicos realizados 
deve estar vazia*/

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

/* const adicionarPet = novoPet => {
    if(typeof novoPet == "object" && validarDados(novoPet)) {
        //adiciona novo pet
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if(!novoPet.servicos) {
            novoPet.servicos = [];
        }

        bancoDados.pets.push(novoPet);
        atualizarBanco();
    } else {
        console.log("Informação em formato inválido!");
    }
} */   

// 4 - Serviços do petshop

/*- Crie uma função chamada **darBanhoPet(pet)** que adiciona o
 **'banho'** a lista de serviços no historico do pet e 
exibe a mensagem `<Nome do Pet> está de banho tomado!`*/

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado!`);
}

/* Crie uma função chamada **tosarPet(pet)** que adiciona o
 **'tosa'** a lista de serviços no historico do pet e 
exibe a mensagem `<Nome do Pet> está com cabelinho na régua`*/

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está com cabelinho na régua!`); 
}

/* Crie uma função chamada **apararUnhasPet(pet)** que adiciona o 
**'corte de unhas'** a lista de serviços no historico do pet e 
exibe a mensagem `<Nome do Pet> está de unhas aparadas!`*/

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de unhas aparadas!`); 
}
/*(O pet pode solicitar o mesmo serviço mais de 1 vez) 
Adicionar data  em que o serviço foi realizado (moment)*/

darBanhoPet(bancoDados.pets[0]);
darBanhoPet(bancoDados.pets[1]);
apararUnhasPet(bancoDados.pets[2]);

console.log("-----------")
//listarPets();  --> chamar a função
//campanhaVacina(); --> chamar a função
listarPets();

adicionarPet({
    
        "nome": "Galega",
        "tipo": "cachorro",
        "idade": 7,
        "raca": "Golden Retrivier",
        "peso": 15,
        "tutor": "Deia",
        "contato": "(81)9922-5536",
        "vacinado": true,
        "servicos": []
    
});
