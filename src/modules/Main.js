export class Main {
    constructor() {
        this.runtimeExt = vm.runtime.ext_jgRuntime;
    }
    checkifworks() {
        console.log("Main module works");
    }
    getFPS() {
        this.runtimeExt.getFrameRate();
    }
    setStageSize(w, h) {
        this.runtimeExt.setStageSize({WIDTH: w, HEIGHT: h})
    }
    setMaxFPS(f) {
        this.runtimeExt.setMaxFrameRate({FRAMERATE: f});
    }
    getMaxFPS() {
        this.runtimeExt.getMaxFrameRate();
    }
    setRuntimeVar(VAR, val){
        vm.runtime.variables[VAR] = val; 
    }
    getRuntimeVar(VAR){
        vm.runtime.variables[VAR];
    }
}

