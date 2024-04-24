const db = require('../db');
const utils = require('../utils');
const tableName = 'songs';
const fieldTitle = 'Title';
const fieldAlbumID = 'AlbumID';
const fieldDuration = 'Duration';
const fieldLyrics = 'Lyrics';

async function getAll() {
    const result = await db.query(`SELECT * FROM ${tableName}`);
    return utils.getData(result);
}

async function save(radiohead) {
    const result = await db.query(
        `INSERT INTO ${tableName} (${fieldTitle}, ${fieldAlbumID}, ${fieldDuration}, ${fieldLyrics}) VALUES ('${radiohead.title}', '${radiohead.albumID}', '${radiohead.duration}', '${radiohead.lyrics}')`
    );
    let message = 'Error during saving data. ';
    if (result.affectedRows) {
        message = 'Data saved successfully. ';
    }
    return { message };
}

async function update(radiohead) {
    const result = await db.query(
        `UPDATE ${tableName} SET ${fieldTitle} = '${radiohead.title}', ${fieldAlbumID} = '${radiohead.albumID}', ${fieldDuration} = '${radiohead.duration}', ${fieldLyrics} = '${radiohead.lyrics}' WHERE id = ${radiohead.id}`
    );
    let message = 'Error during updating data. ';
    if (result.affectedRows) {
        message = 'Data updated successfully. ';
    }
    return { message };
}

async function remove(id) {
    const result = await db.query(`DELETE FROM ${tableName} WHERE id = ${id}`);
    let message = 'Error during removing data. ';
    if (result.affectedRows) {
        message = 'Data removed successfully. ';
    }
    return { message };
}

module.exports = {
    getAll,
    save,
    update,
    remove
}
