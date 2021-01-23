function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

/*

I believe the Big O for this is O(1) because it only has to execute one action each time (either returning true
    or false), however I'm confused if evaluating an "if" statement counts as an action... in which case it would
    be O(2), which I don't think is a thing.

*/