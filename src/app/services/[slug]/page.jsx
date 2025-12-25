import React from 'react';

const serviceDetailsPage = async ({params}) => {
    const {slug} = await params;
    return (
        <div>
            <h1>Service Details Page {slug}</h1>
        </div>
    );
};

export default serviceDetailsPage;