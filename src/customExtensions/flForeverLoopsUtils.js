(function (Scratch){
    if (!Scratch.extensions.unsandboxed) throw new Error("this extension needs to be ran unsandboxed");
    

    class FLUtils {
        constructor(){
            vm._ap = vm.runtime.isPackaged ? "" : "http://localhost:8000/" // change if your local server is different
            this.ap = vm._ap;
            this.scriptsloaded = false; // won't load scripts by default
        }
        getInfo(){
            return {
                id: 'flutils',
                name: 'Forever Loops Utilities',
                color1: '#b35000ff',
                blocks: [
                    {
                        func: "WARN",
                        blockType: Scratch.BlockType.BUTTON,
                        text: "WARNING"
                    },

                    { blockType: Scratch.BlockType.LABEL, text: 'Asset Path Utils' },
                    {
                        opcode: 'pathify',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'pathify [PATH]',
                        arguments: {
                            PATH: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
                        },
                        
                    },
                    {
                        opcode: 'localserv',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'current local dev server',
                    },
                    {
                        opcode: 'refreshserv',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'refresh dev server url',
                    },
                    {
                        opcode: 'setserv',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set server url to [URL]',
                        arguments: {
                            URL: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
                        },
                    },
                    {
                        opcode: 'setservref',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set server url to [URL] and refresh',
                        arguments: {
                            URL: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
                        },
                    },
                    { blockType: Scratch.BlockType.LABEL, text: 'JS Script Utils' },
                    {
                        opcode: 'loadscr',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'load scripts',
                        //hideFromPalette: true,
                    },
                    {
                        opcode: 'loadsrcfrom',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'load script from [URL]',
                        arguments: {
                            URL: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
                        },
                        //hideFromPalette: true,
                    },
                    {
                        opcode: 'checkifloaded',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'scripts loaded ?',
                    },
                    {
                        opcode: 'checkscriptsloaded',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'all scripts loaded',
                    },
                    { blockType: Scratch.BlockType.LABEL, text: 'Game Utils' },
                    {
                        opcode: 'settmpvar',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set [VAR] to [VAL]',
                        arguments: {
                            VAR: { type: Scratch.ArgumentType.STRING, defaultValue: 'temp variable' },
                            VAL: { type: Scratch.ArgumentType.STRING, defaultValue: '' },
                        },
                        //hideFromPalette: true,
                    },    
                    {
                        opcode: 'gettmpvar',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'variable [VAR]',
                        arguments: {
                            VAR: { type: Scratch.ArgumentType.STRING, defaultValue: 'temp variable' },
                        },
                        //hideFromPalette: true,
                    },    
                    {
                        opcode: 'deltmpvar',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'delete variable [VAR]',
                        arguments: {
                            VAR: { type: Scratch.ArgumentType.STRING, defaultValue: 'temp variable' },
                        },
                        //hideFromPalette: true,
                    },   
                ]
            };
        }

        WARN() { alert("THIS EXTENSION WILL ONLY WORK IF YOU HAVE THE SOURCE CODE") }

        pathify(args) {
            return this.ap + args.PATH;
        }
        loadscr() {
            let lstmp = document.querySelectorAll("#loadscripts")
            lstmp.forEach((e) => { e.remove() });

            vm.runtime.variables["SCRIPTSLOADED"] = [];
            

            const loadscripts = document.createElement("script");
            loadscripts.id = "loadscripts";
            loadscripts.src = this.pathify({PATH: "src/customExtensions/exthelpers/loadScripts.js"})

            document.body.appendChild(loadscripts);
        }
        loadscrfrom(args){
            alert("hey this isn't done yet!!\n-- saunter")
        } // i'll do this later
        checkifloaded() { return this.scriptsloaded }
        localserv() { return this.ap }
        refreshserv() { this.ap = vm._ap }
        setserv(args) { vm._ap = args.URL }
        setservref(args) { vm._ap = args.URL; this.refreshserv() }
        checkscriptsloaded() { return vm.runtime.variables["SCRIPTSLOADED"]; }
        settmpvar(args) { vm.runtime.variables[args.VAR] = args.VAL; }
        gettmpvar(args) { return vm.runtime.variables[args.VAR] }
        deltmpvar(args) { delete vm.runtime.variables[args.VAR] }
    }

    Scratch.extensions.register(new FLUtils());
})(Scratch);
