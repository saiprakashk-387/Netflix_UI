
export const userlogout = async (navigate) => {
    sessionStorage.clear()
    await navigate('/')
}
export const moviesGeners = [
    {
        name: "Crime",
        value: "popular"
    }, {
        name: "Thriller",
        value: "top_rated"
    }, {
        name: "Drama",
        value: "upcoming"
    }
]
export const moviesCategory = [
    {
        name: "Documentary",
        value: "popular"
    }, {
        name: "Historical",
        value: "top_rated"
    }, {
        name: "Feature Film",
        value: "upcoming"
    }
]
export const moviesCategories = [
    {
        name: "Popular",
        value: "popular"
    }, {
        name: "Top Rated",
        value: "top_rated"
    }, {
        name: "Up Coming",
        value: "upcoming"
    }
]
export const listStyle={
        color : "red",
        backgroundColor: "white",
        padding: "12px 0 8px 0",
        height: "201px",
        borderRadius: "12px"
    }
