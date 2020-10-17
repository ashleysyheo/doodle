colourList = [{'NO.': "1", 'HEX CODE': '#AEFBC4', 'COLOUR': 'Aero Blue'},
            {'NO.': "2", 'HEX CODE': '#EFCBEF', 'COLOUR': 'Amour'},
            {'NO.': "3", 'HEX CODE': '#A8E9FD', 'COLOUR': 'Anakiwa'},
            {'NO.': "4", 'HEX CODE': '#E87979', 'COLOUR': 'Apricot'},
            {'NO.': "5", 'HEX CODE': '#FBD7BA', 'COLOUR': 'Apricot Peach'},
            {'NO.': "6", 'HEX CODE': '#70FAB1', 'COLOUR': 'Aquamarine'},
            {'NO.': "7", 'HEX CODE': '#118CF0', 'COLOUR': 'Azure Radiance'},
            {'NO.': "8", 'HEX CODE': '#FD6E6E', 'COLOUR': 'Bittersweet'},
            {'NO.': "9", 'HEX CODE': '#016FFE', 'COLOUR': 'Blue Ribbon'},
            {'NO.': "10", 'HEX CODE': '#06E2EA', 'COLOUR': 'Bright Turquoise'},
            {'NO.': "11", 'HEX CODE': '#FBDA1C', 'COLOUR': 'Candlelight'},
            {'NO.': "12", 'HEX CODE': '#F45E68', 'COLOUR': 'Carnation'},
            {'NO.': "13", 'HEX CODE': '#FBD0DD', 'COLOUR': 'Classic Rose'},
            {'NO.': "14", 'HEX CODE': '#98E95E', 'COLOUR': 'Conifer'},
            {'NO.': "15", 'HEX CODE': '#FECECD', 'COLOUR': 'Cosmos'},
            {'NO.': "16", 'HEX CODE': '#FFB4C9', 'COLOUR': 'Cotton Candy'},
            {'NO.': "17", 'HEX CODE': '#FBB5E1', 'COLOUR': 'Cupid'},
            {'NO.': "18", 'HEX CODE': '#2596E6', 'COLOUR': 'Curious Blue'},
            {'NO.': "19", 'HEX CODE': '#E97D82', 'COLOUR': 'Deep Blush'},
            {'NO.': "20", 'HEX CODE': '#1591F0', 'COLOUR': 'Dodger Blue'},
            {'NO.': "21", 'HEX CODE': '#EAC2EC', 'COLOUR': 'French Lilac'},
            {'NO.': "22", 'HEX CODE': '#BBE4FD', 'COLOUR': 'French Pass'},
            {'NO.': "23", 'HEX CODE': '#F77676', 'COLOUR': 'Froly'},
            {'NO.': "24", 'HEX CODE': '#F78C86', 'COLOUR': 'Geraldine'},
            {'NO.': "25", 'HEX CODE': '#4F8EE1', 'COLOUR': 'Havelock Blue'},
            {'NO.': "26", 'HEX CODE': '#D1F2F9', 'COLOUR': 'Humming Bird'},
            {'NO.': "27", 'HEX CODE': '#23DAE7', 'COLOUR': 'Java'},
            {'NO.': "28", 'HEX CODE': '#FBE208', 'COLOUR': 'Lemon'},
            {'NO.': "29", 'HEX CODE': '#FDC221', 'COLOUR': 'Lightning Yellow'},
            {'NO.': "30", 'HEX CODE': '#13CE32', 'COLOUR': 'Malachite'},
            {'NO.': "31", 'HEX CODE': '#7BE3FD', 'COLOUR': 'Malibu'},
            {'NO.': "32", 'HEX CODE': '#277CDD', 'COLOUR': 'Mariner'},
            {'NO.': "33", 'HEX CODE': '#CBDBFE', 'COLOUR': 'Periwinkle'},
            {'NO.': "34", 'HEX CODE': '#4193F0', 'COLOUR': 'Picton Blue'},
            {'NO.': "35", 'HEX CODE': '#FDCAE1', 'COLOUR': 'Pig Pink'},
            {'NO.': "36", 'HEX CODE': '#FEBAC4', 'COLOUR': 'Pink'},
            {'NO.': "37", 'HEX CODE': '#BDFE9D', 'COLOUR': 'Reef'},
            {'NO.': "38", 'HEX CODE': '#F4D90F', 'COLOUR': 'Ripe Lemon'},
            {'NO.': "39", 'HEX CODE': '#3E79E7', 'COLOUR': 'Royal Blue'},
            {'NO.': "40", 'HEX CODE': '#FCDB05', 'COLOUR': 'School Bus Yellow'},
            {'NO.': "41", 'HEX CODE': '#7BD2E8', 'COLOUR': 'Seagull'},
            {'NO.': "42", 'HEX CODE': '#32C88A', 'COLOUR': 'Shamrock'},
            {'NO.': "43", 'HEX CODE': '#7BEEEA', 'COLOUR': 'Spray'},
            {'NO.': "44", 'HEX CODE': '#C5F07F', 'COLOUR': 'Sulu'},
            {'NO.': "45", 'HEX CODE': '#FEB6B9', 'COLOUR': 'Sundown'},
            {'NO.': "46", 'HEX CODE': '#FACA09', 'COLOUR': 'Supernova'},
            {'NO.': "47", 'HEX CODE': '#FC7796', 'COLOUR': 'Tickle Me Pink'},
            {'NO.': "48", 'HEX CODE': '#E4FDFE', 'COLOUR': 'Tranquil'},
            {'NO.': "49", 'HEX CODE': '#CBE3F9', 'COLOUR': 'Tropical Blue'},
            {'NO.': "50", 'HEX CODE': '#FEBCC0', 'COLOUR': 'Your Pink'}];


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(colourList[0]);
generateTableHead(table, data);
generateTable(table, colourList);
