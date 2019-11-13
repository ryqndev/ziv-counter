const fs = require('fs');

const increment = (file) => {
    let currentTime = new Date();
    updateFile(currentTime.toISOString(), file)
}
const updateFile = (data, file) => {
    let oldZivstory = JSON.parse( fs.readFileSync(file) );
    oldZivstory.push(data);
    fs.writeFile(file, JSON.stringify(oldZivstory), (err) => {
        if (err){
            console.log('Something went wrong! Try again.')
            return;
        }

        console.log('Ziv counter updated!');
    });
}

increment('./src/assets/Zivstory.json');