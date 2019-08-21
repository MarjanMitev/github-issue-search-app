/* class for generating query string param api url from a map with filters*/
export default class FilterUtil {
    static generateUrlWithParams(filters:Map<string, string>):string {
        const filterSize = filters.size;
        let searchUrl = filters.size != 0 ? '?': '';
        let index = 0;

        filters.forEach((value, key) => {
            index++;
            searchUrl = `${searchUrl}${key}=${value}${index < filterSize ? '&' : ''}`;
        });
        return searchUrl;
    }
}