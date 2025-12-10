/* 
    this code CANNOT return any errors otherwise
    features like shop, and others will not
    work as expected.
*/
let elements = document.body.querySelectorAll("#LOADSCR");
elements.forEach(el => el.remove());


const LOADINGSCRIPT = document.createElement("script");
vm.runtime.variables['SCRIPTS_LOADED'] = [];

//LOADINGSCRIPT.type = 'module';
LOADINGSCRIPT.id = "LOADSCR"
LOADINGSCRIPT.src = vm._ap + "src/init.js";
LOADINGSCRIPT.onload = () => {
    vm.runtime.variables['SCRIPTS_LOADED'].push('LOAD');
}
LOADINGSCRIPT.onerror = (e) => {
    alert("Error loading assets: " + e );
    vm.runtime.stopAll();
}
document.body.appendChild(LOADINGSCRIPT);