function getadmins(map){
    let admins = [];
    for ([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('Willians', 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('Joao', 'Admin');

console.log(getadmins(usuarios));