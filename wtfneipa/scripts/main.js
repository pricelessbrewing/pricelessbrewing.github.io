
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "You should fucking brew ",
            "You're fucking brewing",
            "Make a fucking glass of juice",
            "Brew a fucking hazy ass ",
            "Fuck it, why not brew"
        ],
        response: [
            "That sounds fucking terrible",
            "I don't wanna fucking brew that",
            "Sounds like catpiss",
			"Do I look like I live on the west coast?",
            "Ya'll mothefuckers need hops",
            "Fuck that idea"
        ],
        template: [
            "@adjective @style made with @yeast, a grist of @basegrain, @grainweight of @flakedgrain, and @grainweight of @specialtygrain. A hop bill of @weight at @time of @cheaterhop, @cheaterhop, and @hop. Dry hop @day with @weight @cheaterhop, @cheaterhop, and @hop.",
        ],
        style: [
            "NE IPA",
			"New England IPA",
			"NE IPA",
            "'Literal glass of orange juice'",
            " 'Jamil thinks this is a starter'",
        ],
        adjective: [
            "A hoppy",
            "a session",
            "an imperial",
            "a Hazy",
            "a Juicy",
        ],
        cheaterhop: [
            "citra",
            "galaxy",
            "hallertauer blanc",
            "huell melon",
            "lemon drop",
             "Mandarina bavaria",
			 "Idaho 007",
             "mosaic",
            "nelson sauvin",
            "eureka",
			"El Dorado",
			"Equinox",
            "wai-iti",
            "waimea",
            "wakatu",
			"azacca",
            "zythos"
        ],
		        hop: [
            "Amarillo",
            "cascade",
            "centennial",
            "citra",
            "comet",
            "crystal",
            "galaxy",
            "hallertauer blanc",
            "huell melon",
            "lemon drop",
             "Mandarina bavaria",
             "mosaic",
            "nelson sauvin",
            "olympic",
            "pioneer",
            "polaris",
            "saaz",
            "simcoe",
            "southern cross",
            "summit",
            "sovereign",
            "tahoma",
            "wai-iti",
            "waimea",
            "wakatu",
            "zythos"
        ],
		    basegrain: [
            "2 row",
            "marris otter",
            "pilsner malt",
            "malted wheat",      
            "golden promise",

        ],
		        flakedgrain: [
            
            "malted wheat",      
            "flaked oats",
            "flaked barley",
            "roasted wheat malt",
            "torrefied wheat",
			"red wheat",
			"golden oats",
			
        ],
        specialtygrain: [
            "vienna malt",
            "carapils",    
            "rye malt",
            "biscuit malt",
            "munich malt",
            "special b",
            "amber malt",
            "spelt malt",
            "red x malt",
            "abbey malt",
            "chit malt",
        ],
		
		        grainweight: [
            "10%",
			"5%",
			"15%",
			"20%",
			"25%",
			"30%",
        ],
		
				yeast: [
            "wlp 001",
            "wlp 002",
			"wlp 007",
			"wlp 008",
			"wlp 028",
            "wyeast 1028",
			"wyeast 1056",
			"wyeast 1098",
			"wyeast 1318",
			"wyeast 1968",
			"conan",
			"wlp 644",

        ],
		grain: [
            "2 row",
            "marris otter",
            "pilsner malt",
            "vienna malt",
            "carapils",
            "malted wheat",      
            "rye malt",
            "biscuit malt",
            "flaked oats",
            "munich malt",
            "flaked barley",
            "flaked corn",
            "golden promise",
            "roasted wheat malt",
            "special b",
            "amber malt",
            "mild ale malt",
            "spelt malt",
            "diastatic malt",
            "red x malt",
            "abbey malt",
            "chit malt",
            "torrefied wheat"
        ],
		        time: [
            "15 min",
			 "10 min",
			"5 min",
			"0 min",
            "whirlpool"
        ],
			 day: [
			 "day 3",
			 "day 4",
            "day 2"
        ],
			weight: [
            "1 oz each ",
			 "2 oz each ",
			"3 oz each ",
			"4 oz each ",
			"a whole god damn lb each"
        ],
		
		
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

}); 
