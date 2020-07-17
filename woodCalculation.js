

function woodCalculator(chair, table, bed){

        const chairWood = chair*1 ;    // Calculation in Qfeet 
        const tableWood = table*3 ;
        const bedWood = bed*5 ;

        var total = chairWood + tableWood + bedWood ; 
        return total ; 
}

var amount = woodCalculator(4, 1, 2);
console.log ( "For my dinning room ", amount , "Qfoot Wood neded");
