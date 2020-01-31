import React, {CSSProperties, ReactNode} from 'react';
import {FlexAlignCenterFlexEnd} from "../../../../neko-3-styles/flex-containers";

interface IPaginationProps {
    page: number; pageCount: number; productTotalCount: number;
    getPage: (newPage: number, newPageCount: number) => void;

    title?: ReactNode; paginationStyle?: CSSProperties; buttonStyle?: CSSProperties; selectStyle?: CSSProperties;
}

const Pagination: React.FC<IPaginationProps> = (
    {
        page, pageCount, productTotalCount, getPage,

        title = 'Pagination', paginationStyle,
        buttonStyle, selectStyle
    }
) => {
    const pages = [];

    for (let i = 1; i <= Math.ceil(productTotalCount / pageCount); i++) pages.push((
        <button
            key={i}
            style={{background: page === i ? 'lime' : undefined, ...buttonStyle}}
            onClick={() => getPage(i, pageCount)}
        >
            {i}
        </button>
    ));

    return (
        <div style={{margin: '0 10px', minHeight: '50px', ...FlexAlignCenterFlexEnd, ...paginationStyle}}>
            {title}

            <select value={pageCount} onChange={e => getPage(page, Number(e.currentTarget.value))} style={selectStyle}>
                <option value={4}>4</option>
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            {pages}
        </div>
    );
};

export default Pagination;
