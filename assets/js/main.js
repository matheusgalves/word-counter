class WordCounter {

    constructor(){
        this.button = document.getElementById("submit-button")
        this.input = document.getElementById("input-text")
    }

    counter(text){
        var textSplit = text.split(" ")
        return textSplit.length
    }
}

