import React from 'react';
import { Pagination } from '../../../src/components/Pagination';

export const PaginationApp: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    
   
    return (
        <div>
        <Pagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            pageCount={10}
            siblingCount={1}
        
        />
        </div>
    );
    }   
