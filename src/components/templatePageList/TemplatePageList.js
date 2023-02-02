import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemplateListItem from "../templateListItem/TemplateListItem";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { ReactWindowScroller as WindowScroller } from "react-window-scroller/dist/index.jsx";

import './templatePageList.scss';

const TemplatePageList = ({ data, title }) => {
    const separationArray = (arr) => {
        const separatedArray = [];
        let countStart = 0;
        let countEnd = 6;

        while (countStart <= arr.length) {
            const partArray = arr.slice(countStart, countEnd)
            separatedArray.push(partArray)
            countStart += 6
            countEnd += 6
        }

        return separatedArray;
    }

    const items = separationArray(data)

    const Cell = ({ columnIndex, rowIndex, style, data }) => {
        const { id, ...props } = data[rowIndex][columnIndex];

        if (data.length === 1) {
            return <div>Error loading</div>
        }

        return (
            <div style={{ ...style }} key={id}>
                <div className="template__item">
                    <Link to='/'>
                        <TemplateListItem {...props} />
                    </Link>
                </div>
            </div>
        )
    };

    return (
        <div className="container">
            <div className="template-page">
                <WindowScroller isGrid>
                    {({ ref, outerRef, style, onScroll }) => (
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <Grid
                                    className="no-scrollbars"
                                    ref={ref}
                                    outerRef={outerRef}
                                    style={style}
                                    onScroll={onScroll}
                                    itemData={items}
                                    columnCount={6}
                                    columnWidth={190}
                                    height={window.innerHeight}
                                    rowCount={41}
                                    rowHeight={340}
                                    width={width}
                                >
                                    {Cell}
                                </Grid>
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            </div>
        </div >
    )
}

export default TemplatePageList;
