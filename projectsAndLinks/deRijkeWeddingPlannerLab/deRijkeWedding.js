let totalGuestsInput = prompt("How many guests do you have?");
let numberOfTablesInput = prompt("How many tables do you want?");

let totalGuests = parseInt(totalGuestsInput);
let numberOfTables = parseInt(numberOfTablesInput);

function distributeGuestsWithTables(totalGuests, numberOfTables) {
    let normalTableSize = Math.floor(totalGuests / numberOfTables);
    let remainingGuests = totalGuests % numberOfTables;
    let regularTables = numberOfTables - remainingGuests;

    return {
        totalGuests: totalGuests,
        numberOfTables: numberOfTables,
        normalTableSize: normalTableSize,
        regularTables: regularTables,
        remainingGuests: remainingGuests,
    };

}

if (isNaN(totalGuests) || isNaN(numberOfTables) || totalGuests < 0 || numberOfTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} else {
    let result = distributeGuestsWithTables(totalGuests, numberOfTables);
    alert(`Your ${result.totalGuests} guests will be seated as follows: ${result.remainingGuests} table(s) of ${result.normalTableSize + 1}, and ${result.regularTables} table(s) of ${result.normalTableSize}`);
}
