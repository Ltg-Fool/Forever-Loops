/* 
    this code CANNOT return any errors otherwise
    features like shop, and others will not
    work as expected.
*/
const LOADINGSCRIPT = document.createElement("script");

LOADINGSCRIPT.type = 'module';
LOADINGSCRIPT.src = vm._ap + "src/init.js";
LOADINGSCRIPT.onload = () => {
    vm.runtime.variables['SCRIPTS_LOADED'].push('LOAD');
}
LOADINGSCRIPT.onerror = (e) => {
    alert("Error loading assets: " + e );
    vm.runtime.stopAll();
}
document.body.appendChild(LOADINGSCRIPT);