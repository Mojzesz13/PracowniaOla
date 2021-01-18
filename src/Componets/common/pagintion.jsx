import React from 'react';
import './pagination.scss';
import _ from 'lodash';

const Pagination = (props) => {
  const {
    itemCount,
    pageSize,
    currentPage,
    onPageChange,
    prevPage,
    nextPage,
  } = props;
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="paginationContainer">
      <ul className="pagination">
        <li className="pageItem">
          <div className="pageLink" onClick={prevPage}>
            Poprzednia
          </div>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'pageItem active' : 'pageItem'}
          >
            <div className="pageLink" onClick={() => onPageChange(page)}>
              {page}
            </div>
          </li>
        ))}
        <li className="pageItem">
          <div className="pageLink" onClick={nextPage}>
            Następna
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
