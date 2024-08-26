import HeaderStyle1 from '@/components/header/HeaderStyle1';
import Modal from '@/components/modal/Modal';
import ProjectDetailsContent from '@/components/portfolio/ProjectDetailsContent';
import React from 'react';

const PortfolioSingleModal = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle1 />
                <Modal>
                    <ProjectDetailsContent />
                </Modal>
            </div>
        </>
    );
};

export default PortfolioSingleModal;