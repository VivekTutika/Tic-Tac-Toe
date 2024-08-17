import React, { useEffect, useState } from 'react';
import http from '../http';

function RecentWinsPage() {
    const [recentWins, setRecentWins] = useState([]);

    useEffect(() => {
        http.get('http://localhost:8000/api/recentWinners')
            .then(response => {
                setRecentWins(response.data);
            })
            .catch(error => {
                console.error('Error fetching recent wins:', error);
            });
    }, []);

    return (
        <div>
            <h1>Recent Wins</h1>
            <ul>
                {recentWins.map((win, index) => (
                    <li key={index}>
                        {win.winner} - {new Date(win.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecentWinsPage;
