function decodeStr(str) {
    // code here
    index = 1
    temp = ""
    loop = true
    count = 0
    condition = false
    while (loop) {

        if (index < str.length) {

            if (count > 0) {

                temp += str[index - 1]
                count--;

            } else if (count == 0) {

                count = str[index];


            }

            if (count == 0) { index = index + 2 }
        } else {
            loop = false

        }
    }


    console.log(temp)

}
decodeStr(str1)