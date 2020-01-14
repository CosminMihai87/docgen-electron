var remote = window.require('electron').remote;
var electronFs = remote.require('fs');
var electronPath = remote.require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const appPath = require('electron').remote.app.getAppPath();
const defaultOutputPath = electronPath.resolve( appPath + '//output//');
const templatePath = electronPath.resolve( appPath + '//src//assets//templates//');

const cleanUP = (dirPath, removeSelf) => {
    try {
        if (electronFs.existsSync(dirPath)){
            if (removeSelf === undefined)
                removeSelf = true;
            try {
                var files = electronFs.readdirSync(dirPath);
            } catch(e) {
                return;
            }
            if (files.length > 0)
                for (let i = 0; i < files.length; i++) {
                    const filePath = electronPath.join(dirPath, files[i]);
                    if (electronFs.statSync(filePath).isFile())
                        electronFs.unlinkSync(filePath);
                    else
                        cleanUP(filePath);
                }
            if (removeSelf)
                electronFs.rmdirSync(dirPath);

        }
    }
    catch (error) {
        let e = {
            message: error.message,
            name: error.name
        };
        console.log(JSON.stringify({error: e}));
        throw error;
    }
};

const createFolderStructure = (structuraDosar, date, outPath) => {
    const fileTemplatePaths = structuraDosar[0].children.filter(m => m.type==='file').map(k =>{ return electronPath.join(templatePath, k.label + '.docx')});
    const fileTemplates = structuraDosar[0].children.filter(m => m.type==='file').map(k=>{return electronPath.join(k.label + '.docx') });
    const folders = structuraDosar[0].children.filter(m => m.type==='folder').map(k=>{return k.label });
    let outputPath = defaultOutputPath;
    if (outPath !== 'defaultPath'){
        outputPath = outPath
    };

    //setImmediate(() => {
    //    cleanUP(outputPath, false);
    //});

    process.nextTick(() => {

        const dosarNR = date.nrFolders+1;
        const folderName = `Ds. ${dosarNR} din 2019 (${date.creditori[0].nume} vs ${date.debitori[0].nume})`;

        // if output folder does not exist we create it
        if (!electronFs.existsSync(outputPath)) {
            try {
                electronFs.mkdir(
                    outputPath,
                    (error) => {
                        if (error) throw error;
                    });
            } catch (error) {
                console.log(`Error when executing mkdir on the main folder: ${error}`);
                return
            };
        };

         // if the folder we want to create already exists we delete it first then recreate it.electronPath
         if (electronFs.existsSync(electronPath.resolve( outputPath + '//' + folderName))) {
            cleanUP(electronPath.resolve( outputPath + '//' + folderName), true);
         };

        try {
            electronFs.mkdir(
                electronPath.join(outputPath, folderName),
                { recursive: false },
                () => {

                for (let i=0; i<=folders.length-1; i++) {
                    try {
                        electronFs.mkdirSync(electronPath.join(outputPath, folderName, folders[i]));
                    } catch (error) {
                        console.log(`Error when executing mkdirSync in a loop on 'folders' array: ${error}`);
                    }
                }

                for (let j=0; j<=fileTemplatePaths.length-1; j++) {

                    let template = null;
                    try {
                        if (electronFs.existsSync(fileTemplatePaths[j])) {
                            try {
                                template = electronFs
                                    .readFileSync(fileTemplatePaths[j], 'binary');

                                let zip = new PizZip(template);
                                let doc = new Docxtemplater();
                                doc.loadZip(zip);
                                doc.setData({
                                    nume_creditor: date.creditori[0].nume,
                                    nume_debitor: date.debitori[0].nume,
                                    titlu_executoriu: date.titluriExecutorii[0]
                                });

                                try {
                                    doc.render()
                                }
                                catch (error) {
                                    let e = {
                                        message: error.message,
                                        name: error.name,
                                        stack: error.stack,
                                        properties: error.properties,
                                    };
                                    console.log(JSON.stringify({error: e}));
                                    throw error;
                                }

                                let buf = doc
                                    .getZip()
                                    .generate({type: 'nodebuffer'});
                                // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
                                const docName = fileTemplates[j];

                                try {
                                    electronFs.writeFileSync( electronPath.join(outputPath, folderName, docName), buf);
                                } catch (error) {
                                    console.log(`Error when executing writeFileSync in a loop on ${electronPath.join(outputPath, folderName, docName)[j]}: ${error}`);
                                };

                            } catch (error) {
                                console.log(`Error when executing readFileSync in a loop on ${fileTemplatePaths[j]}: ${error}`);
                            };
                        }
                    } catch(error) {
                         console.log(`Error when executing existsSync in a loop on ${fileTemplatePaths[j]}: ${error}`);
                    };

                }
            })
        } catch (error) {
            console.log(`Error when executing mkdir on the main folder: ${error}`);
        }

    });

};

export default createFolderStructure;