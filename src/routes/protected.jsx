import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ user, children }) => {
    if (!user) {
        <Navigate to="/register" />
    } else {

        return children
    }
}

export default Protected