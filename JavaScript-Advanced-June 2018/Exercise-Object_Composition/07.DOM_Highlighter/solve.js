function solve(selector) {
    let sel = $(selector);
    let maxDepth = 0;
    let depthSel = sel;

    findDepth(0, sel);
    depthSel.addClass('highlight');
    depthSel.parents().addClass('highlight');
    sel.parents().removeClass('highlight');

    function findDepth(depth, section) {
        if (depth > maxDepth) {
            maxDepth = depth;
            depthSel = $(section);
        }
        $(section).children().each((i, e) => findDepth((depth + 1), e));
    }
}