function acronymize(str) {
    newstr = '';
    if (str[0] != ' ') {
        newstr += str[0];
    }
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] == ' ' && str[i + 1] == ' ') {
            continue;
        } else if (str[i] == ' ') {
            newstr += str[i + 1]
        }
    }
    console.log(newstr.toUpperCase())
}