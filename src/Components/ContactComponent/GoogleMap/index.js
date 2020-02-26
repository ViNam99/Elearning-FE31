import React from 'react';
const prefix="google-map";
const GoogleMap = () => {
    return (
        <div className={prefix}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.430519447435!2d106.6874971!3d10.8222054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1582684311629!5m2!1svi!2s" width="1000" height="450" frameborder="0"  allowfullscreen=""></iframe>
        </div>
    );
};

export default GoogleMap;