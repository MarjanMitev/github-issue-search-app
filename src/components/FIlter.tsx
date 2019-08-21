import * as React from 'react'

interface FilterProps {
    filters: any;
    onChange: (name:string, value:string) => void;
    onClear: (e:React.MouseEvent, value:string) => void;
}

const Filter = (props:FilterProps) => {
    return <div className="filter">
        {props.filters.map((filter) => renderFilters(filter, props))}
    </div> 
}

const renderFilters = (filter:any, props:any) => {
    return (<div key={filter.name} className="filter-row">
            <span className="filter-header">{filter.name}:</span>
                <div className="filter-options">
                    {renderFilterOptions(filter, props)}
                    {filter.name != 'Since' && <span className="filter-clear" onClick={e => props.onClear(e.currentTarget, filter.name)}>x</span>}
                </div>
            </div>
    );
}

const renderFilterOptions = (filter:any, props:any) => {
    return filter.options.map((option, index) => {
        if (option.name == 'since')
            return <label key={index} className="date-picker">
                    <input type="date"
                        key={option.value}
                        onChange={e => props.onChange && props.onChange(filter.name, e.currentTarget.value)}
                        data-date={filter.value} 
                        data-date-format="DD MMMM YYYY"
                        name={filter.options.name}
                        value={filter.value}>
                    </input>
                </label>

        return option.name != 'since' && (
            <label key={index} className="radio">
                <input key={option.value} 
                    onChange={e => props.onChange && props.onChange(filter.name, e.currentTarget.value)}
                    id={option.value} 
                    type="radio" 
                    name={filter.name} 
                    value={option.value} />
                <span>{option.name}</span>
            </label>
        )
    });
}

export default Filter;