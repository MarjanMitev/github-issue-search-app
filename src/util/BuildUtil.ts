import { properties } from '../../build/properties.js';

export default class BuildUtil {
    static configureAPI():string {
        return `${properties.github.apiUrl}/${properties.build.gitHubRepo}/${properties.build.gitHubProject}/${properties.build.searchType}`;
    }
}