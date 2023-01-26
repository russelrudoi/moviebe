import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemplateListItem from "../templateListItem/TemplateListItem";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import './templatePageList.scss';

// const TemplatePageList = ({ data, title }) => {
//     const [offset, setOffset] = useState(30)

//     useEffect(() => {
//         document.addEventListener('scroll', scrollHandler)

//         return () => {
//             document.removeEventListener('scroll', scrollHandler)
//         }
//     })

//     const scrollHandler = (e) => {
//         const heigthDocument = e.target.documentElement.scrollHeight
//         if (heigthDocument - (e.target.documentElement.scrollTop + window.innerHeight) < heigthDocument * 0.3) {
//             setOffset(offset => offset + 18)
//         }
//     }
//     const renderTemplatePageList = (arr) => {
//         if (arr.length === 0) {
//             return <div>Error loading</div>
//         }

//         return arr.map(({ id, ...props }, index, style) => {
//             if (index <= offset) {
//                 return (
//                     <div className="template__item" key={id}>
//                         <Link to='/'>
//                             <TemplateListItem {...props} />
//                         </Link>
//                     </div>
//                 )
//             }
//         })
//     }

//     const elements = renderTemplatePageList(data)

//     return (
// <div className="template-page">
//     <div className="container">
//         <h2 className="title">{title}</h2>
//         <div className="template-page__wrapper">
//             {elements}
//         </div>
//     </div>
// </div>
//     )
// }

// export default TemplatePageList;

const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        Row {index}
    </div>
);

const Example = () => (
    <div style={{ height: '100vh' }}>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={1000}
                        itemSize={35}
                        width={width}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </div>
);

export default Example
