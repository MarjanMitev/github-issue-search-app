import * as React from 'react';
import TimeAgo from 'react-timeago';

interface ListProps {
    data: Array<any>;
}

const List = (props:ListProps) => {
    return <ul className="list">
        { props.data.map(item => renderListItem(item)) }
    </ul>
};

const stateIcon = state => {
    if (state === 'open') {
        return <svg className="state-icon state-icon-issue-opened" 
                viewBox="0 0 14 16" 
                version="1.1" width="14" 
                height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 
                    0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 
                    3H6v5h2V4zm0 6H6v2h2v-2z"></path>
                </svg>;
    } else if (state === 'closed') {
        return <svg className="state-icon state-icon-issue-closed" 
                viewBox="0 0 16 16" 
                version="1.1" width="16" 
                height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 
                    13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 
                    1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path>
                </svg>;
    }
}

const renderListItem = (item: any) => {
    return <li key={item.number} className="list-item">
        <div>
            {stateIcon(item.state)}
            <h4 className="item-title">
                <a href={item.url}>{item.title}</a>
            </h4>
            { item.labels && item.labels.map(label => <span key={label.name} className="badge badge-label">{label.name}</span>) }
        </div>
        <div className="item-meta">
            <span className="issue-number"># {item.number}</span> created by <a href={item.user.url}>{item.user.login} <img className="author-avatar" src={item.user.avatar_url} /></a>
        </div>
        <div className="item-meta">
            <span className="item-date"><label>created:</label><TimeAgo date={item.created_at}/></span>
            <span className="item-date"><label>updated:</label><TimeAgo date={item.updated_at}/></span>
        </div>
    </li>
}

export default List;