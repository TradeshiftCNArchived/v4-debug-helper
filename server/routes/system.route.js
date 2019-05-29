const router = require('express').Router();
const ConfigService = require('../service/config.service');
const Response = require('../service/response.dto');

const schemaValidator = require('../service/schema.validator');
const systemConfigSchema = require('./schemas/system-config.schema');

router.get('/config', (req, res) => {
    res.send(new Response({
        data: ConfigService.getSystemConfig()
    }));
});

router.put('/config', schemaValidator(systemConfigSchema), (req, res) => {
    ConfigService.saveConfig('system.config', req.body);
    res.send(new Response({
        data: ConfigService.getSystemConfig()
    }));
});

router.put('/reset_all_configs', (req, res) => {
    ConfigService.restoreToInit();
    res.send(new Response({
        data: 'success'
    }));
});

module.exports = router;
