import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import PortfolioSingleContent from '@/components/portfolio/PortfolioSingleContent';
import React from 'react';

export const metadata = {
    title: "Chris Norton JR | Web Developer - Portfolio Project"
}

const PortfolioSingle = () => {
   
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="portfolio-project" title="Portfolio Project" />
                <PortfolioSingleContent />
            </LayoutStyle1>
        </>
    );
};

export default PortfolioSingle;