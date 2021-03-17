const customFetch = async (url, action ) => {
    const result = await fetch(
        url
    ).then(res=>res.json())
    .then(json => action(json))
    .catch((error) => {
        throw error;
    }
    );
};

export default customFetch;