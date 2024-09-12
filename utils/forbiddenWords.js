const forbiddenWords = ['badword1', 'badword2']; // Add your forbidden words here

module.exports = {
    isForbidden(word) {
        return forbiddenWords.includes(word.toLowerCase());
    },
};
