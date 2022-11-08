import React from 'react';
import './Team.css';

const Team = (props) => {
    const { progress } = props;
    return (
        <div className='section content-wrapper content-wrapper-padding'>
            <h1>Team</h1>
            <div className='team-members-wrapper'>
                <div className='team-member'>
                    <a href='https://twitter.com/web3d3v'>
                        <h3>@web3d3v</h3>
                        <object type="image/svg+xml" data="images/team-web3d3v.svg" className='svg'>team_web3d3v</object>
                    </a>
                    <ul>
                        <li>worked for number of biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dgn'>
                        <h3>@web3dgn</h3>
                        <object type="image/svg+xml" data="images/team-web3dgn.svg" className='svg'>team-web3dgn</object>
                    </a>
                    <ul>
                        <li>senior dev with two decades of experience</li>
                        <li>half decade in crypto, decade in mobile</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dsgn'>
                        <h3>@web3d3v</h3>
                        <object type="image/svg+xml" data="images/team-web3dsn.svg" className='svg'>team_web3dsn</object>
                    </a>
                    <ul>
                        <li>serion ex-Apple designer</li>
                        <li>experienced in designing DeFi products</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team;
