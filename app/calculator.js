/**
 * calculates a score and a phrase
 * @param name
 * @returns {string}
 */
exports.score = function (name) {


    if (name === "Jessy"){
        return "25/20 -> LA CLASSE"
    }

    if (name === ""){
        return "Merci de rentrer votre prénom"
    }

    let score = exports.stringToIntHash(name);
    if (score < 5) {
        return score + "/20 -> désolé :-\ ";
    }
    if (score < 10) {
        return score + "/20 -> bof bof! ";
    }
    if (score < 15) {
        return score + "/20 pas mal... ";
    }
     return score + " wahou \\o/ ";

};

/**
 * converts a string to an integer between 0 and 20
 * @param str
 * @returns {number}
 */
exports.stringToIntHash=function(str) {
    let result = 0;
    let upperbound = 20;



    for (let i = 0; i < str.length; i++) {
        result = result + str.charCodeAt(i);
    }

    return (result % (upperbound ));
}