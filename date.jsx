var today = new Date()

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

var month = months[today.getMonth()]
var year = today.getFullYear()

const today = `${month}/${year}`

const currentDate = app.activeDocument.textVariables.itemByName('currentDate')
if (!currentDate.isValid) {
    app.activeDocument.textVariables.add({
        name: "currentDate",
        variableType: VariableTypes.CUSTOM_TEXT_TYPE
    })
}

currentDate.variableOptions.contents = today