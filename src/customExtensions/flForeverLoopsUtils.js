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
                    {
                        opcode: 'pathify',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'pathify [PATH]',
                        arguments: {
                            PATH: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
                        },
                        
                    },
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
        loadscrfrom(){} // i'll do this later
        checkifloaded() { return this.scriptsloaded }
        localserv() { return this.ap }
        refreshserv() { this.ap = vm._ap }
        setserv(args) { vm._ap = args.URL }
        setservref(args) { vm._ap = args.URL; this.refreshserv() }
        checkscriptsloaded() {
            return vm.runtime.variables["SCRIPTSLOADED"];
        }
    }

    Scratch.extensions.register(new FLUtils());
})(Scratch);
