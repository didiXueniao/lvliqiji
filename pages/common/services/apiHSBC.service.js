import appConfig from '../app.config';
import buildRequestService from './buildRequest.service';
const apiHsbcService = {
    sendMessage: (req, loadingTitle, ) =>{
        this.showLoading(loadingTitle);
        this.generateRequest(req);

    },
    showLoading: () => {
        my.showLoading();
    },
    hideLoading: () => {
        my.hideLoading();
    },
    generateRequest: (req) => {
        let request = {
            url: appConfig.protocol + appConfig.domain + req.url,
            method: req.method,
            header: req.header,
            data: req.data
        };
        my.request(request);
    }
}
module.export = apiHsbcService;