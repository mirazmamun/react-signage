const letterMatrixMapping = {
    a : [
        [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]
    ],
    b : [
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ],
    c : [
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, , 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ],
    0 : [
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ]
};
export default class LetterMatrix {
    constructor () {
        this.matrixSize = [10, 10];
    }
    /**
     * Get the matrix from the set of letters in the alphabet
     * 
     * @param {String} [letter=null]    The letter for which to return the matrix for
     * @return {Array}  The matrix noation in 10 x 10 binary pattern
    */
    static getLetterMatrix (letter = null) {
        let alphabets = LetterMatrix.getLetterArray();
        let alphabetMatrix = {};
        alphabets.forEach( l => {
            alphabetMatrix[l] = letterMatrixMapping.hasOwnProperty(l) ? letterMatrixMapping[l] : letterMatrixMapping[0];
        });
        //add the null zero letter
        alphabetMatrix['0'] = letterMatrixMapping['0'];
        return letter ? alphabetMatrix[letter.toLowerCase()] : letterMatrixMapping[0];
    }
    /**
     * Get all the letters from alphabet in lower case
     * @return {Array}  The array of alphabets
    */
    static getLetterArray() {
        let alphabets = [];
        let i = 0;
        while (i < 26) {
            alphabets.push(String.fromCharCode('a'.charCodeAt(0) + i));
            ++i;
        }
        return alphabets;
    }
}