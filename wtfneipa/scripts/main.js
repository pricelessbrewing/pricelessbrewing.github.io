
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
            "Ya'll mothefuckers need hops",
            "Fuck that idea"
        ],
        template: [
            "@adjective @style made with a grist of @basegrain, @flakedgrain, @specialtygrain, and a hop bill of  @cheaterhop, @cheaterhop, and @hop",
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
             "mosaic",
            "nelson sauvin",
            "eureka",
			"El Dorado",
			"Equinox",
            "wai-iti",
            "waimea",
            "wakatu",
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
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

}); 
