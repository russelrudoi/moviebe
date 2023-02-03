import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import TemplateListItem from "../templateListItem/TemplateListItem";
import Spinner from "../spinner/Spinner";

import './templatePageList.scss';

const Items = ({ currentItems }) => {

    const renderItems = (arr) => {
        if (arr.length === 0) {
            return <div className="spinner">
                <Spinner />
            </div>
        }

        return arr.map(({ id, ...props }, index) => {
            if (index <= 50) {
                return (
                    <div className="template__item" key={id}>
                        <TemplateListItem {...props} />
                    </div>
                )
            }
        })
    }

    const elements = renderItems(currentItems)

    return (
        <div className="template-page__wrapper">
            {elements}
        </div>
    )
}

const TemplatePageList = ({ items}) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 48

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        window.scrollTo(0, 0);
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="template-page">
                <div className="container">
                    <Items currentItems={currentItems} />
                    <div className="template-page__pagination-wrapper">
                        <ReactPaginate
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="page-item_active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default TemplatePageList;
