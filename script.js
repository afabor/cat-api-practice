const fetchImage = ()=>{
    let image = document.getElementById('cat-image');
    fetch('https://api.thecatapi.com/v1/images/search').then(res) => {
        return res.json()
    }
}