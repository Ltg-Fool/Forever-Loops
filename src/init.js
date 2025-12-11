/* 
    this code CANNOT return any errors otherwise
    features like shop, and others will not
    work as expected.
*/
function pathify(p) {
    return vm._ap + p;
}
function init(e, t, i, s) {
    e.type = t;
    e.id = i;
    e.src = pathify(s)
}


let elements = document.body.querySelectorAll("#MAIN");
elements.forEach(el => el.remove());

vm.runtime.variables['SCRIPTS_LOADED'] = [];
const MAIN = document.createElement("script");
const XMLPARSER = document.createElement("script");


// MAIN.type = 'module';
// MAIN.id = "MAIN"
// MAIN.src = pathify("src/modules/Main.js")
// XMLPARSER.type = 'module';
// XMLPARSER.id = "MAIN"
// XMLPARSER.src = pathify("src/modules/Main.js")

init(MAIN, "module", "MAIN", "src/modules/Main.js");
init(XMLPARSER, "module", "XMLPARSER", "src/modules/XMLParser.js");

MAIN.onload = () => {
    vm.runtime.variables['SCRIPTS_LOADED'].push('MAIN');
}
MAIN.onerror = (e) => {
    alert("Error loading assets: " + e );
    vm.runtime.stopAll();
}
XMLPARSER.onload = () => {
    vm.runtime.variables['SCRIPTS_LOADED'].push('MAIN');
}
XMLPARSER.onerror = (e) => {
    alert("Error loading assets: " + e );
    vm.runtime.stopAll();
}


document.body.appendChild(MAIN);
document.body.appendChild(XMLPARSER);

/*setTimeout(() => {
    const main = new Main();
    const xmlparser = new XMLParser();
}, 1000)*/
const main = new Main();
const xmlparser = new XMLParser();