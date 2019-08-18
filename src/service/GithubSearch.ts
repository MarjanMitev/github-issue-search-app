import axios from 'axios';
import { properties } from '../../build/properties.js';
import BuildUtil from '../util/BuildUtil';
/**
 * Search service that is working with GihHub V3 api: https://api.github.com
 * for searching and filtering issues and pull-requests. 
 */
export default class GitHubSearch {

    public static API_URL: string;
    
    private _instance: GitHubSearch = null;

    constructor() {

        if (this._instance == null) {
            // move this configuration outside, should not be bound to service
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                Authorization: `token ${properties.github.token}`
            };
            GitHubSearch.API_URL = BuildUtil.configureAPI();
            this._instance = this;
        }

        return this._instance;
    }

    async getData(requestUrl: string): Promise<JSON> {
        return await axios.get(requestUrl);
    }
}