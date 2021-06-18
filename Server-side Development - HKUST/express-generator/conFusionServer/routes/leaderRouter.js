const express = require('express');
const authenticate = require('../authenticate');

const leaderRouter = express.Router();

leaderRouter.use(express.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send all the leaders to you!');
    })

    .post(authenticate.verifyUser, (req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put(authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })

    .delete(authenticate.verifyUser, (req, res, next) => {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
    })

    .put(authenticate.verifyUser, (req, res, next) => {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(authenticate.verifyUser, (req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter;