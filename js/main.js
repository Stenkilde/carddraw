var cardArray = [
	{
		"mana": 0,
		"name": "Innervate",
		"quality":	"Basic"
	},
	{
		"mana": 1,
		"name": "Naturalize",
		"quality": "Common"
	},
	{
		"mana": 1,
		"name": "Savagery",
		"quality": "Rare"
	},
	{
		"mana": 4,
		"name": "Astral Communion",
		"quality":	"Epic"
	},
	{
		"mana": 7,
		"name": "Dr. Boom",
		"quality": "Legendary"
	}
];

var arrayLength = cardArray.length;

new Vue({
	el: '#app',
	data: {
		randomArrayItem: {}
	},
	methods: {
	    drawCard: function (event) {
      		this.randomArrayItem = cardArray[Math.floor(Math.random() * arrayLength)];

	    }
  	}
});