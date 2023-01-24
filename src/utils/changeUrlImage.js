const changeUrlImage = (url) => {
    const endIndex = url.indexOf('._');
    const changedUrl = `${url.slice(0, endIndex)}._V1_Ratio0.6716_AL_.jpg`;
    
    return changedUrl
}

export default changeUrlImage