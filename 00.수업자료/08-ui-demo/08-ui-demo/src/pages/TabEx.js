import React , {memo} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useMemo } from 'react';

const TabContainer = styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: block;
            background-color: inherit;
            min-width: 100px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 14px 16px;
            font-size: 17px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3;

            &:hover {
                background-color: #ddd;
            }

            &:active {
                background-color: #ccc;
            }
        }
    }

    .tab-page {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
`

const tabContent = [ {
    id: 'newYork',
    subject: 'NewYork',
    content: 'NewYork is the capital of US.'
}, {
    id: 'london',
    subject: 'London',
    content: 'London is the capital of England.'
}, {
    id: 'paris',
    subject: 'Paris',
    content: 'Paris is the capital of France.'
}, {
    id: 'seoul',
    subject: 'Seoul',
    content: 'Seoul is the capital of Korea.'
}, 
]

const TabEx = memo(() => {
    const [tabIndex, setTabIndex] = React.useState(0);

    const onTabButtonClick = (e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const href = current.getAttribute('href');
        console.log(href)
        setTabIndex(tabIndex => tabContent.findIndex(element => `#${element.id}` === href))
    }

    const {subject, content} = useMemo(() => {
        return tabContent[tabIndex];
    }, [tabIndex])

    return (
        <div>
            <h1>TabEx</h1>
            <TabContainer>
                <div className='tab-button-group'>
                    {tabContent.map((v, i)=> {
                        const cls = classnames({
                            'tab-button': true,
                            'active': i === tabIndex
                        });

                        return (
                            <a key={i} className={cls} href={`#${v.id}`} onClick={onTabButtonClick}>{v.subject}</a>
                        )
                    })}
                </div>

                <div className='tab-page'>
                    <h3>{subject}</h3>
                    <p>{content}</p>
                </div>
            </TabContainer>
        </div>
    )
})

export default TabEx;