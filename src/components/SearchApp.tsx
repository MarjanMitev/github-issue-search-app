import * as React from 'react';
import GitHubSearch from '../service/GithubSearch';
import List from './List';
import Filter from './FIlter';
import FilterUtil from '../util/FilterUtil';
import { availableFIlters } from '../config/filter.js';

interface SearchAppProps { }
interface SearchAppState {
    data: any;
    activeFilters: Map<string, string>;
    loading:boolean;
}

class SearchApp extends React.PureComponent<SearchAppProps, SearchAppState> {

    searchSevice: GitHubSearch;

    constructor(props: any) {
        super(props);
        this.searchSevice = new GitHubSearch();

        this.state = {
            data: new Array<any>(),
            activeFilters: new Map<string, string>(),
            loading:false
        }
    }

    toggleFilter = (name: string, value: string) => {
        // get active filter and if not empty add in map
        let filters = this.state.activeFilters;
        const filterName = name.toLowerCase();
        value != '' ? filters.set(filterName, value) : filters.delete(filterName);
        this.setState({activeFilters: filters,loading: true}, this.search)
    }

    clearFilters = (e:React.MouseEvent, name:string) => {
        // remove all selected for the filter sent
        let viewFilters:any = document.querySelectorAll(`input[name=${name}]:checked`);
        viewFilters.forEach(element => element.checked = false);

        // remove from actriveFilters map
        let filters = this.state.activeFilters;
        filters.delete(name.toLowerCase());

        // update the state and execute search
        this.setState({ activeFilters: filters, loading: true }, this.search)
    }

    search = () => {
        let params = FilterUtil.generateUrlWithParams(this.state.activeFilters);
        this.searchSevice.getData(`${GitHubSearch.API_URL}${params}`)
            .then((data:any) => {
                this.setState({ data: data.data, loading: false});
            })
            .catch((error) => console.log("Error", error));
    }

    componentDidMount(): void {
        this.setState({ loading: true }, this.search);
    }

    render(): React.ReactElement {
        return <div>
            <div className="app-header">
                <a className="link" href="/">
                    <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
                </a>
                <span className="text">Github search</span>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-3">
                    <Filter onChange={this.toggleFilter} onClear={this.clearFilters} filters={availableFIlters} />
                </div>

                <div className="col-xs-12 col-md-9">
                    { !this.state.loading ? 
                        this.state.data.length != 0 ? <List data={this.state.data} /> : <div className="no-results-found">No Results Found</div>
                    : <div>
                        <div className="loader"></div>
                        <span className="loader-text">loading...</span>
                    </div>}
                </div>
            </div>
        </div>
    }

    componentDidCatch(error: Error) {
        console.log("Error: ", error);
    }
}

export default SearchApp;
