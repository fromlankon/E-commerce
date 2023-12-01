export const getData = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    return data
}

export const detailsData = async (id) => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await res.json()
    return data
}

// export const getData = async () => {
//     try {
//         const response = await fetch("https://api.coincap.io/v2/assets");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();

//         // Check if the data is in the expected format
//         if (data && data.data) {
//             return data.data;
//         } else {
//             throw new Error("Data format does not match the expected structure");
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error; // Re-throw the error for handling in the calling code
//     }
// };