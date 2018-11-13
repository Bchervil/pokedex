class Trainer {
        constructor(name) {
            this.name = name;
            this.Pokemon = [];
        }

        all() {
             console.log(this.Pokemon)
            return this.Pokemon;
        }

        get(name) {
            for (let i = 0; i < this.Pokemon.length; i++) {
                let pokemonName = this.Pokemon[i].name;
                if (pokemonName == name) {
                    return this.Pokemon[i];
                }
            }
            return false;
        }

    }

let pokeyJane = new Trainer('pokey jane')



class Pokemon{
constructor(name, attack, ability, defense, hp, id){
     this.name = name
     this.attack = attack,
     this.ability = ability,
     this.defense = defense,
     this.hp = hp
     
}

}


function callAggron() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            console.log(data)
            var newPokemon = new Pokemon(
              data.name,
              data.stats[4].base_stat,
              [data.abilities[0]['ability']['name'],
              data.abilities[1]['ability']['name'],
              data.abilities[2]['ability']['name']],
              data.stats[3].base_stat,
              data.stats[5].base_stat

            )

            console.log(newPokemon)
            updateScreen(newPokemon)

        }
    };
    xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/aggron.json', true);
    xhttp.send();
}

function callGastly(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            console.log(data)
            var newPokemon = new Pokemon(
              data.name,
              data.stats[4].base_stat,
              data.abilities[0]['ability']['name'],
              data.stats[3].base_stat,
              data.stats[5].base_stat

            )

console.log(newPokemon)
updateScreen(newPokemon)
        }
    };
    xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/gastly.json', true);
    xhttp.send();
}

function callClefairy(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText)
          console.log(data)
          var newPokemon = new Pokemon(
            data.name,
            data.stats[4].base_stat,
            [data.abilities[0]['ability']['name'],
            data.abilities[1]['ability']['name'],
            data.abilities[2]['ability']['name']],
            data.stats[3].base_stat,
            data.stats[5].base_stat


          )

  console.log(newPokemon)
  updateScreen(newPokemon)
      }
  };
  xhttp.open('GET', 'http://fizal.me/pokeapi/api/v2/name/clefairy.json', true);
  xhttp.send();
  }

  function grab() {
      document.getElementById('pokeball').addEventListener('click', grab);
  }

   function updateScreen(pokemon) {
    let name = document.getElementById('name');
    let attack = document.getElementById('attack');
    let ability = document.getElementById('ability');
    let defense = document.getElementById('defense');
    let hp = document.getElementById('hp');

    name.innerHTML = (` Name: ${pokemon.name}`);
    attack.innerHTML = (`Attack:${pokemon.attack}`);
    ability.innerHTML = (`Ability:${pokemon.ability}`);
    defense.innerHTML = (`Defense:${pokemon.defense}`);
    hp.innerHTML = (`HP:${pokemon.hp}`);

         }
