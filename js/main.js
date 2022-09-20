// ummm... this is a bit messy and 

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
// document.querySelector('button').addEventListener('click', doubleDuty)


function doubleDuty(){
  console.log('doubleduty')
}


function getFetch(){
  const choice = document.querySelector('select').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const drinkArr = Array.from(data.drinks);
        let tenRandomDrinks = []
        let drinkIDList = []
        for (let i = 0; i < 3; i++){
          let rando = (Math.floor(Math.random() * drinkArr.length))
          tenRandomDrinks.push(data.drinks[rando])
          drinkIDList.push(data.drinks[rando].idDrink)
        }
        console.log(drinkArr)
        console.log(tenRandomDrinks);
        console.log(drinkIDList);
        console.log(data)
        const list = document.getElementById("suggestionList");
        list.innerHTML = ''
        tenRandomDrinks.forEach( (x, i, a) => {
          list.innerHTML += `
          <li class="drink cocktail${x.idDrink}">
          <h2><a href="#"> ${`${x.strDrink}`}</a></h2>
          <img src="${x.strDrinkThumb}" alt="">
          </li>
          `;
          } )
        const cocktailElements = Array.from( document.querySelectorAll('li[class*="cocktail"]') )  
        console.log(cocktailElements)
        cocktailElements.forEach( (x, i) => x.addEventListener('click', () => {
          console.log(`${tenRandomDrinks[i].strDrink}`)
        }))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function addClassToDrinkList(str, i) {
  var ul = document.getElementById("suggestionList");
  li.appendChild(document.createTextNode(str));
  li.classList.add(`drink${(i + 1)}`)
  li.addEventListener('click', () => console.log(`we drinkin tonight`))
  ul.appendChild(li);
}

// function add

const showDrinkClass = () => {
  console.log(`We Drinkin' Tonight`)
}

  function getIngredients(){
    const choice = 11007 /*itemclicked, just margaritas for now*/
    const url = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + choice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          const recipeSpot = document.getElementById("recipeSpot");
          let cocktailRecipe = data.drinks.strInstructions
          recipeSpot.innerHTML = ''
            recipeSpot.innerHTML += `
            ${cocktailRecipe}
            `;
        doubleDuty()  
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
