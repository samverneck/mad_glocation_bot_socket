
const express = require('express');
const router = express.Router();


const userOrganism = require('./organisms/userOrganism');


const createUserCell = require('./organisms/cells/createUserCell');

const findUserCell = require('./organisms/cells/findUserCell');

const findOneUserCell = require('./organisms/cells/findOneUserCell');

const removeUserCell = require('./organisms/cells/removeUserCell');

const updateUserCell = require('./organisms/cells/updateUserCell');



const Create = createUserCell(userOrganism);

const Find = findUserCell(userOrganism);

const FindOne = findOneUserCell(userOrganism);

const Remove = removeUserCell(userOrganism);

const Update = updateUserCell(userOrganism);


router.post('/users', Create);

router.get('/users', Find);

router.get('/users/:id', FindOne);

router.put('/users/:id', Update);

router.delete('/users/:id', Remove);


module.exports = router;