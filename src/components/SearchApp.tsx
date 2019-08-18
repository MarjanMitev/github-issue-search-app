import * as React from 'react';
import GitHubSearch from '../service/GithubSearch';
import List from './List';
import Filter from './FIlter';

interface SearchAppProps {}
interface SearchAppState {
    viewFilters: any;
    selectedFilters: Array<any>;
    data: any;
}

class SearchApp extends React.PureComponent<SearchAppProps, SearchAppState> {

    searchSevice:GitHubSearch;

    constructor(props:any) {
        super(props);
        this.searchSevice = new GitHubSearch();

        this.state = {
            viewFilters: {
                state: {
                    closed: false,
                    selected: false,
                    all:false
                },
                labels: {
                    api:false,
                    android: false,
                    bug: false
                },
                sort: {
                    created: false,
                    updated: false,
                    comments: false
                },
                since: { date:false },
                direction: { asc:false, desc:false },
                filter: {
                    assigned:false,
                    created:false,
                    mentioned:false,
                    subscribed:false,
                    all:false
                }
            },
            data: {},
            selectedFilters: []
        }
    }

    toggleFilter = (key:string, value:string) => {
        const filter = {...this.state.viewFilters[key]};
        filter[value] = !filter[value];

        let chosenFilters = this.state.selectedFilters;
        chosenFilters.push({[key]:value, isActive: filter[value]});
        
        this.setState({
            viewFilters: {...this.state.viewFilters, [key]: filter },
            selectedFilters: chosenFilters
        });

        let activeFilters = this.state.selectedFilters.reduce((current, next) => {
                
        },[]);
    }

    componentDidMount():void {
        this.searchSevice.getData(GitHubSearch.API_URL)
            .then((data) => console.log("Data: ", data))
            .catch((error) => console.log("Error", error));
    }

    componentDidCatch(error:Error) {
        console.log("Error: ", error);
    }

    render():React.ReactElement {
        console.log("Rerender triggered, selected filters:", this.state.selectedFilters);
        return (
            <div>
                <h1>Github Issue search app</h1>
                <Filter filters={this.state.viewFilters} data={this.state.data} onClick={this.toggleFilter}/>
                <List/>
            </div>
        )
    }
}

export default SearchApp;
