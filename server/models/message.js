import pool from 'pool';

exports.getAllMessages = async () => {
    try {
        const res = await pool.query(GET MESSAGES)
        return res.rows;
    } catch (error) {
        throw new Error(error);
    }
}

exports.addNewMessage = async () => {
    try {
        const res = await pool.query(POST MESSAGE)
        return res
    } catch (error) {
        throw new Error(error);
    }
}