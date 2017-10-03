// Used for testing purposes
exports = module.exports = () => {
    const vals = [];
    let nextCalls = 0;

    return {
        req: {
            body: {},
            headers: {},
        },
        res: {
            setHeader: (h, v) => vals.push(`${h}: ${v}`),
        },
        next: () => nextCalls++,
        // Utility
        getHeaders: () => vals,
        getNextCalls: () => nextCalls,
    };
};
