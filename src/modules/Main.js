export class Main {
    constructor(vm) {
        this.vm = vm;
    }
    checkifworks() {
        console.log("Main module works");
        console.log(this.vm);
        console.log(vm);
        console.log(Scratch.vm);
    }
    getFPS() {
        return vm.runtime.ext_jgRuntime.getFrameRate();
    }
    setStageSize(w, h) {
        vm.runtime.ext_jgRuntime.setStageSize({WIDTH: w, HEIGHT: h})
    }
    setMaxFPS(f) {
        this.vm.runtime.ext_jgRuntime.setMaxFrameRate({FRAMERATE: f});
    }
    getMaxFPS() {
        this.vm.runtime.ext_jgRuntime.getMaxFrameRate();
    }
    setRuntimeVar(VAR, val){
        this.vm.runtime.variables[VAR] = val; 
    }
    getRuntimeVar(VAR){
        return this.vm.runtime.variables[VAR];
    }
    pathify(p) {
        return this.vm._ap + p;
    }
}

