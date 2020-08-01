var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var cardsPack = new Array();

function getCardsPack()
{
	var cardsPack = new Array();
		for(var x = 0; x < cards.length; x++)
		{
            var card = {Value: cards[x]};
			cardsPack.push(card);
		}

	return cardsPack;
}

function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var pos1 = Math.floor((Math.random() * cardsPack.length));
		var pos2 = Math.floor((Math.random() * cardsPack.length));
		var tmp = cardsPack[pos1];

		cardsPack[pos1] = cardsPack[pos2];
		cardsPack[pos2] = tmp;
	}

	renderCardsPack();
}

function sort() {
    cardsPack.sort(dynamicsort("Value","asc"));
    renderCardsPack();   
}

function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}


function renderCardsPack()
{
	document.getElementById('cardspack').innerHTML = '';
	for(var i = 0; i < cardsPack.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var valueText = document.createElement("div");
		card.className = "card";
        value.className = "value"+" "+"card" + cardsPack[i].Value + " " + "cards-small";
        valueText.innerHTML = cardsPack[i].Value;
        value.appendChild(valueText)
		card.appendChild(value);
		document.getElementById("cardspack").appendChild(card);
	}
}

function load()
{
	cardsPack = getCardsPack();
	renderCardsPack();
}

window.onload = load;