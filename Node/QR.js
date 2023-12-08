import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
        name: 'URL',
        message: 'Enter the URL'
    }
    ])
    .then((answers) => {
        var qr_svg = qr.image(`${answers.URL}`);
        qr_svg.pipe(fs.createWriteStream(`qr_image.png`));
        fs.writeFile('msg2.txt',`${answers.URL}`,(err)=>{
            if (err) throw err;
            console.log('File Saved')
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });