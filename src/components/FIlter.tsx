import * as React from 'react'

interface FilterProps {
    filters: any;
    data: any;
    onClick: (key:string, value:string, selected:boolean) => void;
}

const Filter = (props:FilterProps) => {
    var style = {
        width: '900px',
        border: '1px solid gray',
        margin: 'auto'
    }

    const viewFilters:Array<any> = props.filters;
    return (
        <div style={style}>
            { 
                Object.keys(viewFilters).map((filterKey, index) => {
                    return <div key={index}>
                            <div><h3 key={filterKey}>{filterKey}</h3></div>
                            <div>
                                {Object.keys(viewFilters[filterKey]).map((filterValue:any) => {
                                    return <span key={filterValue} className={viewFilters[filterKey][filterValue] ? 'red' : ''}
                                        onClick={() => props.onClick(filterKey, filterValue, viewFilters[filterKey][filterValue])}>
                                            {filterValue}
                                        </span>;
                                })}
                            </div>
                        </div>
                })
            }
        </div>
    )
}

export default Filter;