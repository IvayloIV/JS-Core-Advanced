function solve(tag){
    let deepsetLimit = 0;
    function getTag(selector){
        let children = $(selector).children();
        if (children.length == 0){
            return selector;
        }
        let currentSelect, maxChildrenCount = Number.NEGATIVE_INFINITY;
        for (var i = 0; i < children.length; i++) {
            if ($(children[i]).children().length > maxChildrenCount){
                maxChildrenCount = $(children[i]).children().length;
                currentSelect = i;
            }
        }
        deepsetLimit++;
        return getTag(children[currentSelect]);
    }
    let deepestTag = getTag(tag)
    $(deepestTag).addClass('highlight');
    let targets = $(deepestTag).parent();
    for (let i = 0; i < deepsetLimit; i++) {
        $(targets).addClass('highlight');
        targets = $(targets).parent();
    }
}