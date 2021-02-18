var reverseList = function(head) {
    let current = head;
    if (!current) {
        return current;
    }
    let curPre = head.next;
    current.next = null;
    while (curPre) {
        // save the next node
        let tmp = curPre.next;
        curPre.next = current;
        current = curPre;
        curPre = tmp;
    }
    return current;
};
