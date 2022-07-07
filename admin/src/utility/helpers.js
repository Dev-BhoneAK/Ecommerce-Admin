export function formatFormData (productFields, productImages, existingImages) {
    const formData = new FormData();

    Object.keys(productFields).map(fieldName => {
        formData.append(fieldName, productFields[fieldName]);
    })
    console.log('productFields ', productFields);
    // const formDataObj = {
    //     info: {
    //         name: productFields.name,
    //         sku: productFields.sku,
    //         category: productFields.category
    //     },
    //     detail: {
    //         model: productFields.model,
    //         brand: productFields.brand,
    //         description: productFields.description
    //     },
    //     pricing: {
    //         basePrice: productFields.basePrice
    //     },
    //     totalStockCount: productFields.totalStockCount
    // }
    // formData.append('data', formDataObj);
    productImages.length > 0 && productImages.map((image, index) => {
        formData.append('images', image);
    });

    let imageArr = [];
    existingImages.length > 0 && existingImages.map((image, index) => {
        imageArr.push(image.preview);
    });
    formData.append('existingImages', imageArr);
    return formData;
}