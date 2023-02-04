import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TemplateListItem from "../templateListItem/TemplateListItem";
import Spinner from "../spinner/Spinner";
import ErrorIcon from '../../resources/img/icon/error.png';

import './templatePageList.scss';

const Items = ({ currentItems }) => {
    const renderItems = (arr) => {
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

const TemplatePageList = ({ items, loadingStatus }) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 48;

    useEffect(() => {
        changePage();
    }, [items])

    useEffect(() => {
        changePage();
        window.scrollTo(0, 0);
    }, [itemOffset, itemsPerPage]);

    if (loadingStatus === 'loading') {
        return (
            <div className="spinner spinner-page">
                <Spinner />
            </div>
        )
    } else if (loadingStatus === 'error') {
        return (
            <div className="error error-page">
                <img src={ErrorIcon} alt="" />
                Error
            </div>
        )
    }

    const changePage = () => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        setItemOffset(newOffset);
    };

    return (
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
    );

}

export default TemplatePageList;
