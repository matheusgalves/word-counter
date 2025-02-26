class WordCounter {

    constructor(){
        this.wordElement = document.getElementById("words")
        this.form = document.getElementById("form-text")
        this.input = document.getElementById("input-text")
        this.button = document.getElementById("submit-button")
        this.table = document.getElementById("table-result")
        this.table.style.visibility = "hidden"
    }

    showTable(){
        
        this.form.addEventListener("submit", (event) =>{
            event.preventDefault();

            let textValue = this.input.value
            let words = this.counter(textValue)
            let wordElement = this.wordElement

            wordElement.textContent = words
            this.table.style.visibility = "visible"
        })
    }

    counter(text){
        var textSplit = text.split(" ")
        return textSplit.length
    }
}



wc = new WordCounter()
wc.showTable()