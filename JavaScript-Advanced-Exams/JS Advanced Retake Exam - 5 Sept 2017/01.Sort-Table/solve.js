function sort(colIndex, descending) {
    function sortByName(a, b) {
        let firstText = $(a).find('td:first-child').text();
        let secondText = $(b).find('td:first-child').text();
        return firstText.localeCompare(secondText);
    }
    function sortByPrice(a, b) {
        let firstNum = Number($(a).find('td:last-child').text());
        let secondNum = Number($(b).find('td:last-child').text());
        return firstNum - secondNum;
    }
    let typeSort = colIndex === 0 ? sortByName : sortByPrice;
   let sortedArr = $('tbody tr').toArray().sort(typeSort);
   if (descending){
       sortedArr.reverse();
   }
   sortedArr.forEach((e) => {
      $('tbody').append(e);
   });
}