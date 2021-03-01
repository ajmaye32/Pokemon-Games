const inquirer = require('inquirer');
const playGame = () => {
    inquirer
        .prompt([{
            // pass your questions in here
            type: 'input',
            message: 'what is your trainer name??',
            name: "trainerName"
        },
        {
            type: 'password',
            message: 'set your password',
            name: 'password',
        },
        {
            type: "list",
            message: 'Choose your starter pokemon!',
            choices: ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu', 'Reggie',],
            name: 'pokemon',
        }

        ])
        .then(res => {
            inquirer
                .prompt([{
                    type: 'input',
                    message: `what would you like to name your ${res.pokemon}`,
                    name: 'pokemonName'
                }]).then(inqRes => {
                    let trainnerName = res.trainerName
                    let PokemonType = res.pokemon;
                    let pokemonName = inqRes.pokemonName;
                    console.log(`Welcome ${trainnerName}`)
                    console.log(`your ${pokemonName}, called ${pokemonName} is ready for battle!`);
                    console.log('A wild caterpie appeared!');
                    console.log(`${trainnerName}, called ${pokemonName}`);
                    let pokemon_hp = 50;
                    let cat_hp = 30;
                    const battleSequence = (pokemon_hp, cat_hp, pokemonName) => {

                        inquirer
                            .prompt([{
                                type: 'list',
                                message: ' which move will you attack with?',
                                choices: ['tackle', 'sand attack', 'Glare'],
                                name: 'attack'
                            }])
                            .then(res => {
                                pokemon_hp -= Math.floor(Math.random() * 10);
                                cat_hp -= Math.floor(Math.random() * 10);
                                console.log(`${pokemonName}, used ${res.attack}`);
                                console.log(`Caterpie has ${cat_hp} health points remaining`)
                                console.log('Caterpie used Tackle');
                                console.log(`${pokemonName}, has ${pokemon_hp} health points remaining.`);
                                if (pokemon_hp <= 0) {
                                    console.log(`${pokemonName} has fainted, you black...`);
                                } else if (cat_hp <= 0) {
                                    console.log('Caterpie fainted you won!');
                                } else {
                                    battleSequence(pokemon_hp, pokemonName)
                                }
                            })
                    };
                    battleSequence(pokemon_hp, cat_hp, pokemonName);
                })
        })
}
playGame();