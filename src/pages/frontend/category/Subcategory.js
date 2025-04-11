import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Subcategory = () => {
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
    const [loading, setLoading] = useState(false);

    const limit = 10;

    const fetchCategories = async (page = 1) => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/category/read?page=${page}&limit=${limit}`);
            setCategories(res.data.category);
            setPagination(res.data.pagination);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories(pagination.page);
    }, [pagination.page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setPagination(prev => ({ ...prev, page: newPage }));
        }
    };
    console.log(categories);
    return (
        <Fragment>
            <div className="section margin-top-65 padding-bottom-55">
                <div className="container">
                    <div className="row">
                        <div className="utf-categories-container-block">
                            {
                                categories.map((rows, index) => {
                                    return (<Link to={`/jobs/${rows.url}`} className="utf-category-box" key={index}>
                                        <div className="utf-opening-position-counter-item">10 Openings</div>
                                        <div className="utf-category-box-icon-item"> <i className={rows.cssClassName} /> </div>
                                        <div className="utf-category-box-content">
                                            <h3>{rows.category_name}</h3>
                                        </div>
                                        <div className="utf-category-box-counter-item">8,188 Jobs</div>
                                    </Link>)
                                })
                            }                           
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="clearfix" />
                    <div className="utf-pagination-container-aera margin-top-40 margin-bottom-0">
                        <nav className="pagination">
                            <ul>
                                <li className="utf-pagination-arrow"><Link onClick={() => handlePageChange(pagination.page - 1)} disabled={pagination.page <= 1} className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></Link></li>
                                <li><Link to="#" className="ripple-effect current-page">{pagination.page} of {pagination.totalPages}</Link></li>
                                {/* <li><Link to="#" className="ripple-effect">2</Link></li>
                                <li><Link to="#" className="ripple-effect">3</Link></li> */}
                                <li className="utf-pagination-arrow">
                                    <Link to="#" onClick={() => handlePageChange(pagination.page + 1)}
                            disabled={pagination.page >= pagination.totalPages} className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></Link>
                                    </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </Fragment>

    );
};

export default Subcategory;
