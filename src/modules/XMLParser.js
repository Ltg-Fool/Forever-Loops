export class XMLParser {
    constructor(){ 
        this.xmlString = null;
        this.parser = new DOMParser();
    }
    parseXML(xml) {
        this.parser.parseFromString(xml, 'text/xml');
    }
}