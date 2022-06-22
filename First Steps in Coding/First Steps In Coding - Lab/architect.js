function architect (input) {
    let name = input[0]
    let projects = Number(input[1])
    let hours = (3)
    let projectscomplete = hours * projects
    console.log(`The architect ${name} will need ${projectscomplete} hours to complete ${projects} project/s.`)
}
architect(["Ivan",4])